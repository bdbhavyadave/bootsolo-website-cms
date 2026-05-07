-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  role VARCHAR NOT NULL CHECK (role IN ('admin', 'editor', 'author')),
  first_name VARCHAR,
  last_name VARCHAR,
  profile_picture VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog Posts Table Updates
-- Assuming blog_posts might already exist, we'll create or replace it
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR NOT NULL,
  slug VARCHAR UNIQUE NOT NULL,
  content TEXT,
  excerpt VARCHAR,
  featured_image_url VARCHAR,
  featured_image_alt VARCHAR,
  seo_title VARCHAR,
  seo_description VARCHAR,
  focus_keyword VARCHAR,
  category VARCHAR,
  tags TEXT[],
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status VARCHAR DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  scheduled_for TIMESTAMP WITH TIME ZONE,
  views_count INTEGER DEFAULT 0,
  og_title VARCHAR,
  og_description VARCHAR,
  canonical_url VARCHAR,
  reading_time INTEGER,
  word_count INTEGER,
  seo_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Keywords Table
CREATE TABLE IF NOT EXISTS keywords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword VARCHAR NOT NULL,
  search_volume INTEGER DEFAULT 0,
  current_rank INTEGER,
  target_rank INTEGER,
  difficulty_score INTEGER DEFAULT 0,
  traffic_generated INTEGER DEFAULT 0,
  tracked_by_user UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Redirects Table
CREATE TABLE IF NOT EXISTS redirects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  old_url VARCHAR NOT NULL,
  new_url VARCHAR NOT NULL,
  type VARCHAR DEFAULT '301' CHECK (type IN ('301', '302')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activity Logs Table
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR NOT NULL CHECK (action IN ('created', 'updated', 'published', 'deleted', 'login', 'logout')),
  resource_type VARCHAR NOT NULL CHECK (resource_type IN ('blog_post', 'keyword', 'redirect', 'user', 'setting')),
  resource_id UUID,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Note: Ensure `leads` table exists from previous build:
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  company VARCHAR NOT NULL,
  service_interested VARCHAR,
  budget_range VARCHAR,
  timeline VARCHAR,
  message TEXT,
  status VARCHAR DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create initial admin user (Password is 'Admin123!')
-- You should delete this or change password immediately after login
INSERT INTO users (email, password_hash, role, first_name, last_name)
VALUES ('admin@example.com', '$2a$10$X0.h1oO5G1Vv3/dI8Fj0f.sTj3x8sZ5p0XbT/lR4hQ/aUv6nL6H.e', 'admin', 'Super', 'Admin')
ON CONFLICT (email) DO NOTHING;
