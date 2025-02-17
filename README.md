프론트엔드 배포 파이프라인

## 주요 링크

- S3 버킷 웹사이트 엔드포인트: http://hanghae-fe4-yoomin.s3-website-ap-southeast-2.amazonaws.com
- CloudFrount 배포 도메인 이름: https://d1pce3k3c8tvtx.cloudfront.net

## 배포 아키텍처

![배포 아키텍처](./assets/diagram.svg)

## 주요 개념

- GitHub Actions과 CI/CD 도구: 
    GitHub Actions는 코드 레포지토리에서 직접 소프트웨어 개발 워크플로우를 자동화할 수 있는 CI/CD 플랫폼.   
    코드 변경사항이 push되면 자동으로 빌드, 테스트, 배포 등의 작업을 수행할 수 있다.

- S3와 스토리지: 
    S3(Simple Storage Service)는 AWS의 확장 가능한 객체 스토리지 서비스. 
    웹사이트 호스팅, 백업, 로그 저장 등 다양한 용도로 사용. 
    파일을 버킷이라는 컨테이너에 저장하며, 각 객체는 고유한 URL을 가짐. 
    정적 웹사이트 호스팅에 자주 사용.

- CloudFront와 CDN: 
    CloudFront는 AWS의 CDN(Content Delivery Network) 서비스. 
    전 세계에 분산된 엣지 로케이션을 통해 콘텐츠를 캐싱하고 더 빠르게 전달. 
    S3에 저장된 정적 파일이나 동적 콘텐츠를 사용자와 가까운 위치에서 제공하여 지연 시간을 줄이고 성능을 향상.

- 캐시 무효화(Cache Invalidation):
    CloudFront에 캐시된 콘텐츠를 강제로 새로 고치는 프로세스. 
    웹사이트 콘텐츠가 업데이트되었을 때, 기존에 캐시된 버전을 무효화하고 새로운 버전을 제공. 
    특정 파일 경로나 전체 캐시를 무효화할 수 있다.

- Repository secret과 환경변수: 
    GitHub 레포지토리에서 안전하게 보관해야 하는 민감한 정보(API 키, 비밀번호 등)를 저장하는 방법. 
    GitHub Actions 워크플로우에서 이러한 시크릿을 환경변수로 사용할 수 있으며, 암호화되어 저장되고 권한이 있는 사용자만 접근할 수 있다.