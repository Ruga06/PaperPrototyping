# 배포 안내

이 웹사이트는 Node.js 서버로 실행됩니다. 플레이어 정보는 JSON 파일로 저장합니다.

## 1. 내 컴퓨터에서 실행

1. Node.js를 설치합니다.
2. 이 폴더에서 터미널을 엽니다.
3. 아래 명령어를 실행합니다.

```powershell
npm start
```

4. 브라우저에서 엽니다.

```text
http://127.0.0.1:4174/index.html
```

## 2. 같은 와이파이 휴대폰에서 접속

1. PC와 휴대폰을 같은 와이파이에 연결합니다.
2. PC의 로컬 IP 주소를 확인합니다.
3. 휴대폰 브라우저에서 아래처럼 접속합니다.

```text
http://PC_IP주소:4174/index.html
```

예시:

```text
http://192.168.0.12:4174/index.html
```

## 3. Render에 배포

Render는 GitHub 저장소를 연결해서 Node 서버를 실행할 수 있습니다.

1. GitHub에 새 저장소를 만듭니다.
2. 이 폴더의 파일을 GitHub 저장소에 올립니다.
3. Render에서 `New Web Service`를 선택합니다.
4. GitHub 저장소를 연결합니다.
5. 설정값을 입력합니다.

```text
Build Command: npm install
Start Command: npm start
```

6. 저장 데이터를 유지하려면 Persistent Disk를 추가합니다.
7. 디스크 Mount Path를 정하고, 환경변수도 같은 경로로 설정합니다.

```text
DATA_DIR=/data
```

Render는 기본 파일 시스템이 임시 저장소라서, Persistent Disk 없이 저장한 플레이어 정보는 재배포나 재시작 때 사라질 수 있습니다.

## 4. Railway에 배포

Railway도 GitHub 저장소를 연결해 Node 앱을 자동 감지해서 실행할 수 있습니다.

1. GitHub에 이 프로젝트를 올립니다.
2. Railway에서 `Deploy from GitHub repo`를 선택합니다.
3. 이 저장소를 선택합니다.
4. 실행 명령이 필요하면 아래처럼 설정합니다.

```text
npm start
```

5. 저장 데이터를 유지하려면 Volume을 추가합니다.
6. Volume Mount Path를 아래처럼 설정합니다.

```text
/app/data
```

Railway에서 상대 경로 `./data`를 유지하려면 `/app/data`에 볼륨을 붙이는 방식이 맞습니다.

## 5. 현재 저장되는 정보

- 플레이어 이름
- 최대 HP
- 현재 HP
- 공격력
- 보유 스킬 카드

저장 파일 위치:

```text
data/players.json
```
