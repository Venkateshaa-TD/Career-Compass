import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ttjxbqbtrufpnftcraod.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0anhicWJ0cnVmcG5mdGNyYW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNTA4NTcsImV4cCI6MjA3MzgyNjg1N30.s6APPtpQkjUI2nRIUSR0CtnIQOTq9VHbtz2tHw_ua_I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
