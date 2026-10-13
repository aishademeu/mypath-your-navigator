-- Migration: Add parent role, mini bio, parent invite code, parent_student_links, opportunity metadata
-- File: supabase/migrations/20260911120000_parent_core.sql

-- Extend profiles
alter table profiles add column role text not null default 'student' check (role in ('student','parent','admin'));
alter table profiles add column banner_url text;
alter table profiles add column mini_bio text; -- optional short bio
alter table profiles add column parent_invite_code varchar(12);

-- Parent‑Student link table
create table parent_student_links (
  id uuid primary key default uuid_generate_v4(),
  parent_id uuid references profiles(id) on delete cascade,
  student_id uuid references profiles(id) on delete cascade,
  invite_code varchar(12) unique,
  created_at timestamp default now()
);

-- Opportunity metadata columns
alter table opportunities add column organizer varchar(255);
alter table opportunities add column deadline date;
alter table opportunities add column source_url varchar(512);

-- RLS policies (example snippets; actual full policies may be elsewhere)
-- Students: full access to own rows
create policy "students can access own profile" on profiles for all using (auth.uid() = id);
-- Parents: can read linked student's limited columns
create policy "parents can read linked student" on profiles for select using (
  auth.role() = 'parent' and exists (
    select 1 from parent_student_links where parent_id = auth.uid() and student_id = id
  ) and (
    role = 'student' -- restrict to student rows
  )
);
-- Admins: full access
create policy "admin full access" on profiles for all using (auth.role() = 'admin');

-- RLS for parent_student_links
create policy "owner can view link" on parent_student_links for select using (
  auth.uid() = parent_id or auth.uid() = student_id
);
create policy "owner can insert link" on parent_student_links for insert with check (
  auth.uid() = parent_id
);

-- RLS for opportunities (only approved and not expired visible to all authenticated)
create policy "public read approved opportunities" on opportunities for select using (
  status = 'approved' and (deadline is null or deadline >= now())
);

-- Note: additional policies for admin writes should already exist.
