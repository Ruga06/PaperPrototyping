create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  max_hp integer not null default 30,
  current_hp integer not null default 30,
  attack integer not null default 0,
  skill_ids integer[] not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.players enable row level security;
