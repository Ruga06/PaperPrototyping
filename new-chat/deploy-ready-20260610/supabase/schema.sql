create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  max_hp integer not null default 30,
  current_hp integer not null default 30,
  attack integer not null default 0,
  speed integer not null default 0,
  coins integer not null default 0,
  previous_job_id integer not null default 0,
  isekai_job_id integer not null default 0,
  skill_ids integer[] not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.players add column if not exists speed integer not null default 0;
alter table public.players add column if not exists coins integer not null default 0;
alter table public.players add column if not exists previous_job_id integer not null default 0;
alter table public.players add column if not exists isekai_job_id integer not null default 0;

alter table public.players enable row level security;
