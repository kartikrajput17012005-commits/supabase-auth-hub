import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lymwuvsscoprwwbipwqp.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_aR9osvA2UTZP-1isvSUxbg_iUAJpsK2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
