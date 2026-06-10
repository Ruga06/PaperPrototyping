# 배포 가이드

이 앱은 두 가지 방식으로 사용할 수 있습니다.

## 1. 수업 당일에 가장 쉬운 방식: 내 노트북 서버

같은 와이파이에 있는 학생들이 접속할 수 있게 노트북에서 서버를 켭니다.

```powershell
npm start
```

브라우저에서 내 PC로 접속할 때:

```text
http://내_PC_IP:4174/index.html
```

내 PC IP는 Windows 터미널에서 아래 명령으로 확인할 수 있습니다.

```powershell
ipconfig
```

`IPv4 주소` 값을 사용하면 됩니다.

## 2. 온라인 공개 배포: Vercel + Supabase

Vercel에는 화면과 API를 배포하고, Supabase에는 플레이어 정보를 저장합니다.

### 1단계: Supabase 프로젝트 만들기

1. Supabase에 로그인합니다.
2. 새 프로젝트를 만듭니다.
3. 왼쪽 메뉴에서 SQL Editor를 엽니다.
4. [supabase/schema.sql](supabase/schema.sql) 내용을 복사해서 실행합니다.

이미 배포한 적이 있어도 업데이트 후 이 SQL을 다시 실행하세요. 기존 기록은 삭제되지 않고
속도, 재화, 전생 직업, 이세계 직업 항목만 추가됩니다.

### 2단계: Supabase 키 확인

Supabase 프로젝트에서 아래 값을 확인합니다.

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

`SERVICE_ROLE_KEY`는 절대 브라우저 코드나 GitHub 공개 저장소에 넣지 않습니다. Vercel 환경변수에만 넣습니다.

### 3단계: Vercel에 프로젝트 올리기

1. GitHub에 이 폴더를 올립니다.
2. Vercel에서 `Add New Project`를 누릅니다.
3. GitHub 저장소를 선택합니다.
4. Framework Preset은 `Other`로 둡니다.
5. Build Command는 비워두거나 기본값을 사용합니다.
6. Output Directory도 비워둡니다.

### 4단계: Vercel 환경변수 추가

Vercel 프로젝트 설정에서 Environment Variables에 아래 값을 추가합니다.

```text
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

추가 후 반드시 다시 배포합니다.

`SUPABASE_URL`에는 `/rest/v1`, `/dashboard`, 프로젝트 설정 페이지 주소를 붙이지 않습니다.
정확히 아래 모양이어야 합니다.

```text
https://프로젝트참조값.supabase.co
```

### 5단계: 접속 확인

배포된 Vercel 주소에서 설정 페이지를 엽니다.

1. 플레이어 이름을 입력합니다.
2. HP, 공격력, 보유 스킬을 정합니다.
3. `저장`을 누릅니다.
4. 새로고침 후 `저장된 플레이어` 목록에 이름이 보이면 성공입니다.

연결 상태만 확인하려면 Vercel 주소 뒤에 `/api/health`를 붙여 엽니다.

```text
https://내-프로젝트.vercel.app/api/health
```

정상이면 아래처럼 표시됩니다.

```json
{"ok":true,"message":"Vercel and Supabase are connected."}
```

## 로컬 Node 서버 저장 방식

Vercel이 아니라 내 PC나 일반 Node 서버에서 실행하면 `data/players.json`에 저장됩니다.

```powershell
npm start
```

저장 경로를 따로 지정하려면 환경변수를 사용합니다.

```text
DATA_DIR=/persistent-data
```
