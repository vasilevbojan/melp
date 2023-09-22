import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ikywqdfhczcyrlwwmign.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlreXdxZGZoY3pjeXJsd3dtaWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMTE0NTcsImV4cCI6MjAxMDc4NzQ1N30.Adtt11_DfeNJwF0WLrKp_c7bq5WGliSoord10XIigiE"
);

console.log(supabase);
export default supabase;
