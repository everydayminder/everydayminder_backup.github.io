var store = [{
        "title": "20080709 Install Ubuntu 7.10 & VMware-tools",
        "excerpt":"[C] Installiation of Ubuntu 7.10 flow downloaded the image file installation complete (without security packages) comments installed Ubuntu 8.04 (the latest version) failed to install other development packages on it version 8.04 seems NOT stable as 7.xx -&gt; let’s install version 7.10 instead it takes too long!! (about an hour)...","categories": ["system"],
        "tags": ["tomcat"],
        "url": "/system/20080709-install-ubuntu-710-vmware-tools/",
        "teaser":null},{
        "title": "Ubuntu에서 VIM이 재설치가 안될때",
        "excerpt":"Ubuntu 7.10에서 기본적으로 설치되어 있는 Vim은 Tiny 버전이다.기타 필요한 VIM의 기능을 쓸 수가 없으므로, 재설치는 필수이다. sudo apt-get install vim그러나, 이 재설치가 제대로 안되는 경우가 있다.이럴 때, Ubuntu 소스의 repository를 제대로 업데이트 해줘야sudo apt-get update도 된다. 다음의 내용을 보완하자. /etc/apt/sources.list 파일에 아래의 내용을 추가(혹은 기존 내용은 모두 삭제 or 코멘트...","categories": ["tips"],
        "tags": ["vim"],
        "url": "/tips/install_vim_under_ubuntu/",
        "teaser":null},{
        "title": "HBase Installation (Standalone mode/local file system)",
        "excerpt":"Requirements Java 1.5.x, preferably from Sun. Hadoop 0.16.x. This version of HBase will only run on Hadoop 0.16.x.. ssh must be installed and sshd must be running to use Hadoop’s scripts    to manage remote Hadoop daemons. HBase currently is a file handle hog. The usual default of 1024 on...","categories": ["system"],
        "tags": ["hadoop"],
        "url": "/system/hbase-installation-standalone-modelocal-file-system/",
        "teaser":null},{
        "title": "Hadoop Installation on Ubuntu Linux 7.10",
        "excerpt":"Related articles by Michael G. Noll Running Hadoop On Ubuntu Linux (Single Node Cluster)http://wiki.apache.org/hadoop/Running_Hadoop_On_Ubuntu_Linux_%28Single-Node_Cluster%29 Running Hadoop On Ubuntu Linux (Multi Node Cluster)http://www.michael-noll.com/wiki/Running_Hadoop_On_Ubuntu_Linux_%28Multi-Node_Cluster%29 [Comments] I created a VMWare Team project file and added two instances of existing virtual machines. Each VMWare instance has a single node cluster. IP alias name should...","categories": ["system"],
        "tags": ["hadoop"],
        "url": "/system/hadoop-installation-on-ubuntu-linux-710/",
        "teaser":null},{
        "title": "불필요 ethernet interface 정보 정리하기",
        "excerpt":"VMWare를 쓰면서, 만들어둔 이미지를 여러번 복사하면서 쓰다보니불필요한 ethernet interface 정보가 생성됐다. eth0, eth1만 필요한데,막상 인터페이스 정보를 보면, eth4, eth5로 생성되어 있는 이 현상을정리하려면 다음과 같이 하면 된다. $ cd /etc/udev/rules.d$ vi 70-persistent-net.rules파일을 열어서, 내용을 다 지워주고, 재부팅한다.재부팅 후, 네트워크 인터페이스를 조사하면, 다시 eth0, eth1 등으로 재 설정된 것을 확인할 수...","categories": ["linux","vm"],
        "tags": ["linux"],
        "url": "/linux/vm/Cleansing_Ehternet_Info/",
        "teaser":null},{
        "title": "퍼옴) 명지대 김정운 교수 강연내용 발췌 (2008. 7. 10)",
        "excerpt":"김정운 명지대 교수 강연내용(2008.7.10, DM총괄 Professional Forum) ㅇ 본인이 행복을 강연하고 다니니 어설픈 사람으로 인식되는 경우가 있으나    나름대로 공부를 많이 했음. 독일에서 13년간 유학했고 본인이 가르친    제자 중 3명이 교수가 되었음. 최근 1명이 하버드대학 교수가 되었는데,    본인이 가르친 것이 계기가 되어 관련 분야를 연구하여 결과적으로    하버드대...","categories": ["reading"],
        "tags": [],
        "url": "/reading/Happiness_by_JWKim/",
        "teaser":null},{
        "title": "be allergic to, contagious",
        "excerpt":"be allergic to commonly used when you have some kind of allergies contagious a disease is capable of being trasmitted by infection or easily spreads as from one person to another ","categories": ["english"],
        "tags": [],
        "url": "/english/be-allergic-to-contagious/",
        "teaser":null},{
        "title": "on the verge of",
        "excerpt":"verge brink, point, edge, threshold   border, edge, margin, limit, boundary, threshold, brimcome near to, approach, border on, resemble, incline to, be similar to, touch on… &lt;/span&gt; 가장자리, 경계 on the verge of : ~의 경계에 있으므로 뭔가 변화가 일어나기 직전.                        막 ~ 하려고 하는 중인. ex) The country was...","categories": ["english"],
        "tags": [],
        "url": "/english/on-the-verge-of/",
        "teaser":null},{
        "title": "there is no ~ing",
        "excerpt":"“~하는 것은 불가능하다”, “~할 수 없다”라는 뜻이다. ~하는 것은 불가능하다, ~할 수 없다라는 말을 영작할 때, 습관적으로 It is impossible to ~, S cannot ~ 라고 했다면, there is no ~ ing라고도 써보자. 내일 전화영어에는 꼭 써보리라. -_-+ There is no singing in the library. 도서관에서 노래 부를 수 없다....","categories": ["english"],
        "tags": [],
        "url": "/english/there-is-no-ing/",
        "teaser":null},{
        "title": "why ~? vs. how come ~?",
        "excerpt":"why와 how come은 둘 다, “왜~?”라는 문장을 구성한다. 그러나, 그 뒤의 문장 순서가 다르다는 차이가 있다. why로 시작하는 의문문은 우리가 알고 있는 의문문의 형태이다. 그러나, how come은 평서문의 순서를 취한다. “왜 전화 안 했어?” Why didn’t you phone me? How come you didn’t phone me? “왜 일찍 일어나지 않았어?” Why...","categories": ["english"],
        "tags": [],
        "url": "/english/why-vs-how-come/",
        "teaser":null}]
