export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      application_progress: {
        Row: {
          completed: boolean
          opportunity_id: string
          step_key: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          opportunity_id: string
          step_key: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          opportunity_id?: string
          step_key?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      career_hypotheses: {
        Row: {
          id: string
          user_id: string
          direction_name: string
          why_it_appeared: string
          evidence: string[]
          relevant_strengths: string[]
          relevant_interests: string[]
          unknowns: string[]
          skills_to_explore: string[]
          next_experiment: string
          status: "active" | "strengthened" | "weakened" | "explored" | "archived"
          version: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          direction_name: string
          why_it_appeared: string
          evidence?: string[]
          relevant_strengths?: string[]
          relevant_interests?: string[]
          unknowns?: string[]
          skills_to_explore?: string[]
          next_experiment: string
          status?: "active" | "strengthened" | "weakened" | "explored" | "archived"
          version?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          direction_name?: string
          why_it_appeared?: string
          evidence?: string[]
          relevant_strengths?: string[]
          relevant_interests?: string[]
          unknowns?: string[]
          skills_to_explore?: string[]
          next_experiment?: string
          status?: "active" | "strengthened" | "weakened" | "explored" | "archived"
          version?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      discovery_sessions: {
        Row: {
          id: string
          user_id: string
          status: "in_progress" | "completed"
          current_question: string | null
          history: Json
          insights: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          status?: "in_progress" | "completed"
          current_question?: string | null
          history?: Json
          insights?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: "in_progress" | "completed"
          current_question?: string | null
          history?: Json
          insights?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      my_path_actions: {
        Row: {
          id: string
          user_id: string
          action: string
          why_it_matters: string
          expected_outcome: string
          supporting_recommendation: string | null
          status: "active" | "completed" | "skipped"
          created_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          why_it_matters: string
          expected_outcome: string
          supporting_recommendation?: string | null
          status?: "active" | "completed" | "skipped"
          created_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          why_it_matters?: string
          expected_outcome?: string
          supporting_recommendation?: string | null
          status?: "active" | "completed" | "skipped"
          created_at?: string
          completed_at?: string | null
        }
        Relationships: []
      }
      parent_student_links: {
        Row: {
          id: string
          parent_id: string
          student_id: string | null
          invite_code: string | null
          student_email: string | null
          status: "pending" | "approved" | "rejected"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          parent_id: string
          student_id?: string | null
          invite_code?: string | null
          student_email?: string | null
          status?: "pending" | "approved" | "rejected"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          parent_id?: string
          student_id?: string | null
          invite_code?: string | null
          student_email?: string | null
          status?: "pending" | "approved" | "rejected"
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      manual_payments: {
        Row: {
          id: string
          user_id: string
          amount_kzt: number
          receipt_note: string | null
          receipt_file_url: string | null
          status: "pending" | "approved" | "rejected"
          verified_by: string | null
          verified_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount_kzt?: number
          receipt_note?: string | null
          receipt_file_url?: string | null
          status?: "pending" | "approved" | "rejected"
          verified_by?: string | null
          verified_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount_kzt?: number
          receipt_note?: string | null
          receipt_file_url?: string | null
          status?: "pending" | "approved" | "rejected"
          verified_by?: string | null
          verified_at?: string | null
          created_at?: string
        }
        Relationships: []
      }
      telegram_sources: {
        Row: {
          id: string
          channel_username: string
          title: string | null
          enabled: boolean
          last_scraped_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          channel_username: string
          title?: string | null
          enabled?: boolean
          last_scraped_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          channel_username?: string
          title?: string | null
          enabled?: boolean
          last_scraped_at?: string | null
          created_at?: string
        }
        Relationships: []
      }
      opportunities: {
        Row: {
          id: string
          title: string
          org: string
          category: string
          description: string
          deadline: string | null
          min_age: number | null
          max_age: number | null
          min_grade: number | null
          max_grade: number | null
          countries: Json | null
          cost: string | null
          format: string | null
          verified: boolean | null
          requirements: string[] | null
          tags: string[] | null
          fields: string[] | null
          url: string | null
          source_url: string | null
          source_channel: string | null
          source_message_id: number | null
          raw_text: string | null
          status: "approved" | "pending_review" | "rejected" | "expired"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          org: string
          category: string
          description: string
          deadline?: string | null
          min_age?: number | null
          max_age?: number | null
          min_grade?: number | null
          max_grade?: number | null
          countries?: Json | null
          cost?: string | null
          format?: string | null
          verified?: boolean | null
          requirements?: string[] | null
          tags?: string[] | null
          fields?: string[] | null
          url?: string | null
          source_url?: string | null
          source_channel?: string | null
          source_message_id?: number | null
          raw_text?: string | null
          status?: "approved" | "pending_review" | "rejected" | "expired"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          org?: string
          category?: string
          description?: string
          deadline?: string | null
          min_age?: number | null
          max_age?: number | null
          min_grade?: number | null
          max_grade?: number | null
          countries?: Json | null
          cost?: string | null
          format?: string | null
          verified?: boolean | null
          requirements?: string[] | null
          tags?: string[] | null
          fields?: string[] | null
          url?: string | null
          source_url?: string | null
          source_channel?: string | null
          source_message_id?: number | null
          raw_text?: string | null
          status?: "approved" | "pending_review" | "rejected" | "expired"
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      onboarding: {
        Row: {
          completed_at: string | null
          dream: string | null
          experience_level: string | null
          goals: string[]
          interests: string[]
          problems: string[]
          strengths: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          dream?: string | null
          experience_level?: string | null
          goals?: string[]
          interests?: string[]
          problems?: string[]
          strengths?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          dream?: string | null
          experience_level?: string | null
          goals?: string[]
          interests?: string[]
          problems?: string[]
          strengths?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      opportunity_unlocks: {
        Row: {
          created_at: string
          id: string
          opportunity_id: string
          plan: Json | null
          price_kzt: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          opportunity_id: string
          plan?: Json | null
          price_kzt?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          opportunity_id?: string
          plan?: Json | null
          price_kzt?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      portfolio_items: {
        Row: {
          created_at: string
          date: string | null
          description: string | null
          id: string
          section: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date?: string | null
          description?: string | null
          id?: string
          section: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string | null
          description?: string | null
          id?: string
          section?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          about: string | null
          age: number | null
          avatar_url: string | null
          banner_url: string | null
          city: string | null
          country: string | null
          created_at: string
          curious_about: string | null
          email: string | null
          grade: string | null
          id: string
          language: string
          mini_bio: string | null
          name: string | null
          phone: string | null
          preferred_lang: string | null
          role: "student" | "parent" | "admin"
          school: string | null
          updated_at: string
          world_change: string | null
        }
        Insert: {
          about?: string | null
          age?: number | null
          avatar_url?: string | null
          banner_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          curious_about?: string | null
          email?: string | null
          grade?: string | null
          id: string
          language?: string
          mini_bio?: string | null
          name?: string | null
          phone?: string | null
          preferred_lang?: string | null
          role?: "student" | "parent" | "admin"
          school?: string | null
          updated_at?: string
          world_change?: string | null
        }
        Update: {
          about?: string | null
          age?: number | null
          avatar_url?: string | null
          banner_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          curious_about?: string | null
          email?: string | null
          grade?: string | null
          id?: string
          language?: string
          mini_bio?: string | null
          name?: string | null
          phone?: string | null
          preferred_lang?: string | null
          role?: "student" | "parent" | "admin"
          school?: string | null
          updated_at?: string
          world_change?: string | null
        }
        Relationships: []
      }
      saved_opportunities: {
        Row: {
          created_at: string
          opportunity_id: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          opportunity_id: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          opportunity_id?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          plan: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          plan?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          plan?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_pro: {
        Args: { _user_id: string }
        Returns: boolean
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
      is_parent: {
        Args: { _user_id: string }
        Returns: boolean
      }
      is_linked_parent: {
        Args: { _parent_id: string; _student_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
