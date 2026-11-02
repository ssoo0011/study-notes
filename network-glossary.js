(() => {
  const glossary = {
    "컴퓨터 네트워크": "컴퓨터와 장치들이 연결되어 데이터를 주고받는 시스템.",
    "인터넷": "전 세계의 여러 네트워크가 서로 연결된 거대한 네트워크.",
    "월드 와이드 웹": "인터넷을 통해 웹 페이지와 자원을 주고받는 서비스.",
    "LAN": "집이나 사무실처럼 가까운 범위의 네트워크.",
    "WAN": "도시나 국가처럼 넓은 범위의 네트워크.",
    "호스트": "네트워크에 연결되어 데이터를 보내거나 받는 장치.",
    "클라이언트": "서버에 서비스나 데이터를 요청하는 쪽.",
    "서버": "클라이언트의 요청을 받아 처리하고 응답하는 쪽.",
    "프로토콜": "장치들이 통신할 때 따르는 약속과 규칙.",
    "OSI 모델": "네트워크 통신 기능을 일곱 계층으로 설명하는 참조 모델.",
    "TCP/IP 모델": "인터넷 통신에 쓰이는 프로토콜을 계층별로 설명하는 모델.",
    "캡슐화": "보낼 데이터에 계층별 전달 정보를 차례로 덧붙이는 과정.",
    "역캡슐화": "받은 데이터에서 계층별 전달 정보를 확인하고 벗기는 과정.",
    "PDU": "특정 네트워크 계층에서 주고받는 데이터 단위.",
    "대역폭": "링크가 이론적으로 전달할 수 있는 최대 데이터 양.",
    "처리율": "실제로 일정 시간 동안 성공적으로 전달한 데이터 양.",
    "패킷 손실": "보낸 패킷이 목적지까지 도착하지 못하는 현상.",
    "이더넷": "유선 LAN에서 프레임을 주고받는 데 널리 쓰이는 표준 기술.",
    "프레임": "데이터 링크 계층에서 주소와 데이터를 담아 보내는 단위.",
    "MAC 주소": "같은 링크에서 네트워크 인터페이스를 구별하는 주소.",
    "NIC": "컴퓨터를 유선이나 무선 네트워크에 연결하는 장치.",
    "트위스티드 페어": "잡음을 줄이기 위해 구리선 두 가닥을 꼬아 만든 케이블.",
    "광섬유": "빛을 이용해 데이터를 전달하는 가느다란 섬유 케이블.",
    "허브": "들어온 신호를 여러 포트로 복제해 보내는 장치.",
    "스위치": "MAC 주소를 보고 LAN 프레임을 알맞은 포트로 전달하는 장치.",
    "VLAN": "하나의 물리 네트워크를 여러 논리적인 LAN으로 나누는 기술.",
    "충돌 도메인": "동시에 전송하면 신호 충돌이 발생할 수 있는 범위.",
    "CSMA/CD": "공유 이더넷에서 전송 전 매체를 듣고 충돌을 감지하는 방식.",
    "라우터": "목적지 IP를 보고 다른 네트워크로 패킷을 전달하는 장치.",
    "기본 게이트웨이": "내 서브넷 밖으로 보낼 때 기본으로 쓰는 다음 장치 주소.",
    "게이트웨이": "현재 네트워크 밖으로 나갈 때 패킷을 전달하는 다음 장치.",
    "IP 주소": "네트워크에서 목적지 장치를 찾는 데 사용하는 논리 주소.",
    "IPv4": "32비트 길이의 IP 주소 체계.",
    "IPv6": "128비트 주소를 사용해 더 넓은 주소 공간을 제공하는 IP 체계.",
    "서브넷 마스크": "IP 주소에서 네트워크 부분과 호스트 부분을 나누는 값.",
    "서브넷": "하나의 IP 네트워크를 나눈 작은 네트워크 구역.",
    "CIDR": "네트워크 비트 수를 /24처럼 표시하는 주소 표기법.",
    "서브네팅": "큰 IP 네트워크를 여러 작은 서브넷으로 나누는 일.",
    "공인 IP 주소": "인터넷에서 전역적으로 라우팅할 수 있는 IP 주소.",
    "사설 IP 주소": "내부에서 쓰고 인터넷에 직접 라우팅하지 않는 IP 주소.",
    "NAPT": "주소와 포트를 변환해 여러 내부 장치가 공인 IP를 함께 쓰는 방식.",
    "NAT": "네트워크를 지날 때 IP 주소를 다른 주소로 바꾸는 기술.",
    "DHCP": "IP 주소와 게이트웨이 같은 설정을 자동으로 빌려주는 서비스.",
    "ARP": "IPv4 주소에 대응하는 같은 LAN의 MAC 주소를 알아내는 절차.",
    "라우팅 테이블": "목적지 네트워크별 다음 경로를 기록한 표.",
    "DNS": "도메인 이름에 해당하는 IP 주소 등의 정보를 찾아주는 시스템.",
    "도메인": "IP 주소 대신 사람이 읽기 쉬운 서버 이름.",
    "포트 포워딩": "공유기 외부 포트를 내부 서버 주소와 포트에 연결하는 설정.",
    "포트 번호": "한 컴퓨터 안에서 통신할 프로그램을 구분하는 번호.",
    "포트": "전송 계층에서 통신할 프로그램의 창구를 구분하는 번호.",
    "TCP": "연결을 맺고 순서와 확인 응답 등을 관리하는 전송 프로토콜.",
    "UDP": "연결 설정 없이 데이터그램을 보내는 간단한 전송 프로토콜.",
    "세그먼트": "TCP 데이터와 TCP 헤더를 합친 전송 단위.",
    "데이터그램": "UDP가 한 번에 보내는 독립적인 데이터 단위.",
    "쓰리 웨이 핸드셰이크": "TCP 연결을 시작할 때 SYN, SYN/ACK, ACK를 주고받는 절차.",
    "재전송": "손실되었거나 확인되지 않은 데이터를 다시 보내는 일.",
    "흐름 제어": "송신량을 수신 장치가 처리할 수 있는 양에 맞추는 기능.",
    "혼잡 제어": "네트워크가 과부하되지 않도록 송신량을 조절하는 기능.",
    "HTTP 메서드": "서버에 조회·생성·수정·삭제 같은 요청 의도를 알리는 값.",
    "HTTP 헤더": "요청이나 응답에 형식·캐시·인증 정보를 담는 부분.",
    "HTTP": "웹 클라이언트와 서버가 요청과 응답을 주고받는 규칙.",
    "HTTPS": "TLS로 암호화하고 서버를 확인하면서 사용하는 HTTP.",
    "TLS": "통신 상대 확인과 데이터 암호화를 제공하는 보안 프로토콜.",
    "URI": "자원을 식별하는 문자열의 일반적인 이름.",
    "URL": "자원의 위치와 접근 방법을 나타내는 URI의 한 종류.",
    "상태 코드": "HTTP 응답의 성공·이동·오류 종류를 나타내는 숫자.",
    "쿠키": "브라우저가 저장하고 다음 요청에 함께 보내는 작은 상태 정보.",
    "캐시": "이전에 받은 데이터를 저장해 다음에 다시 활용하는 기능.",
    "Wireshark": "네트워크 패킷을 캡처하고 계층별로 분석하는 도구.",
    "패킷": "IP 계층에서 주소와 데이터를 담아 보내는 단위.",
    "방화벽": "통신 규칙에 따라 네트워크 연결을 허용하거나 차단하는 장치.",
    "Firewall": "주소·포트 등의 규칙으로 네트워크 연결을 허용하거나 막는 방화벽.",
    "NSG": "클라우드 네트워크의 서브넷이나 인터페이스에 적용하는 통신 규칙 묶음.",
    "로드 밸런서": "들어온 요청을 여러 서버에 나누어 전달하는 장치나 서비스.",
    "Load Balancer": "들어온 요청을 여러 서버에 나누어 전달하는 장치나 서비스.",
    "리버스 프록시": "서버 앞에서 요청을 받아 내부 서버로 전달하는 중개 서버.",
    "Reverse Proxy": "서버 앞에서 요청을 받아 내부 서버로 전달하는 중개 서버.",
    "가용성": "필요할 때 서비스를 정상적으로 이용할 수 있는 정도.",
    "이중화": "장애에 대비해 같은 역할의 장치나 서비스를 여분으로 준비하는 구성.",
    "AP": "무선 장치를 유선 네트워크에 연결해 주는 Wi-Fi 접속 장치.",
    "SSID": "사용자가 Wi-Fi 목록에서 보는 무선 네트워크 이름.",
  };

  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  const latinTerms = terms.filter((term) => /^[A-Za-z]/.test(term));
  const otherTerms = terms.filter((term) => !/^[A-Za-z]/.test(term));
  const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = [
    ...latinTerms.map((term) => `(?<![A-Za-z0-9])${escapePattern(term)}(?![A-Za-z0-9])`),
    ...otherTerms.map(escapePattern),
  ].join("|");
  const matcher = new RegExp(pattern, "g");

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "css/glossary.css";
  document.head.append(stylesheet);

  const contentRoot = document.querySelector(".lesson-content, .curriculum-main, .visual-main") || document.querySelector("main") || document.body;
  const walker = document.createTreeWalker(contentRoot, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script,style,code,pre,kbd,textarea,input,svg,.glossary-term")) return NodeFilter.FILTER_REJECT;
      matcher.lastIndex = 0;
      return matcher.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const shownTerms = new Set();
  for (const node of textNodes) {
    const text = node.nodeValue;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    matcher.lastIndex = 0;
    for (const match of text.matchAll(matcher)) {
      const term = match[0];
      const start = match.index;
      fragment.append(document.createTextNode(text.slice(lastIndex, start)));
      if (shownTerms.has(term)) {
        fragment.append(document.createTextNode(term));
      } else {
        const hint = document.createElement("span");
        hint.className = "glossary-term";
        hint.tabIndex = 0;
        hint.dataset.tip = glossary[term];
        hint.setAttribute("aria-label", `${term}: ${glossary[term]}`);
        hint.textContent = term;
        fragment.append(hint);
        shownTerms.add(term);
      }
      lastIndex = start + term.length;
    }
    fragment.append(document.createTextNode(text.slice(lastIndex)));
    node.replaceWith(fragment);
  }
})();
