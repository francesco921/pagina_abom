import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hftkajszczizskrhqmkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdGthanN6Y3ppenNrcmhxbWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTA0NTAsImV4cCI6MjA2NjMyNjQ1MH0.f02Fv7FaR0J3Av1rlO0o3tA9eAoBx00plngsBIJW9D4";

export const supabase = createClient(supabaseUrl, supabaseKey);
