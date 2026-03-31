import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hvntcgbntwnocaetffrs.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_lj1wYpny796fa-DZB87yEw_4xtSjn_S';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
