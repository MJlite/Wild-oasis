import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://trinbvpmxwgtqpjpuzuy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyaW5idnBteHdndHFwanB1enV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNzkzNTksImV4cCI6MjAxMTc1NTM1OX0.PidfqkPzubnJXXL0qajEKurJWHmseG35-rHJGQXIMaw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
