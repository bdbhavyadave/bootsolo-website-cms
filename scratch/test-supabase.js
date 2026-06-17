const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://wfxlllqvflzybcfkcytc.supabase.co/';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmeGxsbHF2Zmx6eWJjZmtjeXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTI5Mjg4NCwiZXhwIjoyMDk0ODY4ODg0fQ.kZLLM_WAOgflHUxuGhzAwdgcP8jb_pttLd7J4H01dYs';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
  console.log('Testing connection to Supabase...');
  try {
    // Let's query information_schema or perform a simple select on clinic_leads
    const { data, error } = await supabase
      .from('clinic_leads')
      .select('*')
      .limit(1);

    if (error) {
      console.log('Error querying clinic_leads table:', error.message);
      console.log('Error code:', error.code);
    } else {
      console.log('Successfully connected! clinic_leads table exists.');
      console.log('Sample data:', data);
    }
  } catch (err) {
    console.error('Failed to run test:', err);
  }
}

main();
