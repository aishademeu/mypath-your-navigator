import { OpportunityContract } from './types';
import { KAZAKHSTAN_OPPORTUNITIES } from './kazakhstan';
import { STEM_COMPETITIONS } from './stem_competitions';
import { SCHOLARSHIPS_FELLOWSHIPS } from './scholarships_fellowships';
import { RESEARCH_PROGRAMS } from './research_programs';
import { SUMMER_SCHOOLS } from './summer_schools';
import { HUMANITIES_ARTS } from './humanities_arts';
import { ENTREPRENEURSHIP_SOCIAL } from './entrepreneurship_social';
import { US_ONLY_AND_PLACEHOLDERS } from './us_only_and_placeholders';
import { MORE_OPPORTUNITIES } from './more_opportunities';
import { LEGACY_CONVERTED } from './legacy_converted';
import { LEADERSHIP_EXCHANGE_INTERNSHIP } from './leadership_exchange_internship';
import { VOLUNTEERING_SOCIAL } from './volunteering_social';
import { SCIENCE_MEDICINE_BUSINESS } from './science_medicine_business';
import { ONLINE_GIRLS_SCHOLARSHIPS } from './online_girls_scholarships';

export const ALL_RAW_OPPORTUNITIES: OpportunityContract[] = [
  ...KAZAKHSTAN_OPPORTUNITIES,
  ...STEM_COMPETITIONS,
  ...SCHOLARSHIPS_FELLOWSHIPS,
  ...RESEARCH_PROGRAMS,
  ...SUMMER_SCHOOLS,
  ...HUMANITIES_ARTS,
  ...ENTREPRENEURSHIP_SOCIAL,
  ...MORE_OPPORTUNITIES,
  ...LEGACY_CONVERTED,
  ...US_ONLY_AND_PLACEHOLDERS,
  ...LEADERSHIP_EXCHANGE_INTERNSHIP,
  ...VOLUNTEERING_SOCIAL,
  ...SCIENCE_MEDICINE_BUSINESS,
  ...ONLINE_GIRLS_SCHOLARSHIPS,
];
