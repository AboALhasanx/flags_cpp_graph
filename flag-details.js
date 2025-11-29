// البيانات مدمجة مباشرة
const allFlagsData = {
  "flags": [
    {
      "id": "jp",
      "name": "اليابان",
      "emoji": "🇯🇵",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Japan Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(300,220,70,70);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "آسيا"
    },
    {
      "id": "ae",
      "name": "الإمارات",
      "emoji": "🇦🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"UAE Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,200,340);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(200,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(200,180,500,260);\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(200,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "الشرق الأوسط"
    },
    {
      "id": "kw",
      "name": "الكويت",
      "emoji": "🇰🇼",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Kuwait Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,260,500,340);\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    int points[]={100,100,100,340,250,220,100,100};\n    fillpoly(4,points);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "الشرق الأوسط"
    },
    {
      "id": "qa",
      "name": "قطر",
      "emoji": "🇶🇦",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Qatar Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(6);\n    setfillstyle(SOLID_FILL,6);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,220,340);\n    setcolor(6);\n    line(220,100,250,130);\n    line(250,130,220,160);\n    line(220,160,250,190);\n    line(250,190,220,220);\n    line(220,220,250,250);\n    line(250,250,220,280);\n    line(220,280,250,310);\n    line(250,310,220,340);\n    floodfill(230,120,6);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "الشرق الأوسط"
    },
    {
      "id": "bh",
      "name": "البحرين",
      "emoji": "🇧🇭",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Bahrain Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,220,340);\n    setcolor(4);\n    int p1[]={220,100,250,140,220,180,220,100};\n    int p2[]={220,180,250,220,220,260,220,180};\n    int p3[]={220,260,250,300,220,340,220,260};\n    fillpoly(4,p1);\n    fillpoly(4,p2);\n    fillpoly(4,p3);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "الشرق الأوسط"
    },
    {
      "id": "om",
      "name": "عمان",
      "emoji": "🇴🇲",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Oman Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,200,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(200,100,500,180);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(200,180,500,260);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(200,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "الشرق الأوسط"
    },
    {
      "id": "ye",
      "name": "اليمن",
      "emoji": "🇾🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Yemen Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "الشرق الأوسط"
    },
    {
      "id": "ly",
      "name": "ليبيا",
      "emoji": "🇱🇾",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Libya Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,180);\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,180,500,260);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,260,500,340);\n    setcolor(15);\n    circle(280,220,25);\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    fillellipse(288,220,22,22);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(330,220,10,10);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "أفريقيا"
    },
    {
      "id": "tr",
      "name": "تركيا",
      "emoji": "🇹🇷",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Turkey Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(15);\n    circle(250,220,50);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(270,220,45,45);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(340,220,18,18);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "الشرق الأوسط"
    },
    {
      "id": "lb",
      "name": "لبنان",
      "emoji": "🇱🇧",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Lebanon Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,170);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,170,500,270);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,270,500,340);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    int cedar[]={300,190,280,225,285,225,290,240,295,225,300,225,305,240,310,225,315,225,320,225,300,190};\n    fillpoly(11,cedar);\n    line(298,225,302,225);\n    line(300,225,300,250);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "الشرق الأوسط"
    },
    {
      "id": "jo",
      "name": "الأردن",
      "emoji": "🇯🇴",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Jordan Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,260,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    int tri[]={100,100,100,340,280,220,100,100};\n    fillpoly(4,tri);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(200,220,15,15);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "الشرق الأوسط"
    },
    {
      "id": "ps",
      "name": "فلسطين",
      "emoji": "🇵🇸",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Palestine Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,260,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    int tri[]={100,100,100,340,280,220,100,100};\n    fillpoly(4,tri);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "الشرق الأوسط"
    },
    {
      "id": "de",
      "name": "ألمانيا",
      "emoji": "🇩🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Germany flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,100,500,180);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,180,500,260);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "ru",
      "name": "روسيا",
      "emoji": "🇷🇺",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Russia\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,180);\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,180,500,260);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "nl",
      "name": "هولندا",
      "emoji": "🇳🇱",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Netherlands\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "bg",
      "name": "بلغاريا",
      "emoji": "🇧🇬",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Bulgaria\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,180);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,180,500,260);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "hu",
      "name": "هنغاريا",
      "emoji": "🇭🇺",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Hungary\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "at",
      "name": "النمسا",
      "emoji": "🇦🇹",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Austria\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "lu",
      "name": "لوكسمبورغ",
      "emoji": "🇱🇺",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Luxembourg\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(12);\n    setfillstyle(SOLID_FILL,12);\n    bar(100,100,500,180);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,180,500,260);\n    setcolor(3);\n    setfillstyle(SOLID_FILL,3);\n    bar(100,260,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "fr",
      "name": "فرنسا",
      "emoji": "🇫🇷",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"France\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,100,233,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(233,100,367,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "it",
      "name": "إيطاليا",
      "emoji": "🇮🇹",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Italy\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,233,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(233,100,367,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "be",
      "name": "بلجيكا",
      "emoji": "🇧🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Belgium\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(0);\n    setfillstyle(SOLID_FILL,0);\n    bar(100,100,233,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(233,100,367,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "ro",
      "name": "رومانيا",
      "emoji": "🇷🇴",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Romania\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,100,233,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(233,100,367,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "ml",
      "name": "مالي",
      "emoji": "🇲🇱",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Mali\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,233,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(233,100,367,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أفريقيا"
    },
    {
      "id": "gn",
      "name": "غينيا",
      "emoji": "🇬🇳",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Guinea\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,233,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(233,100,367,340);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أفريقيا"
    },
    {
      "id": "ng",
      "name": "نيجيريا",
      "emoji": "🇳🇬",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Nigeria\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,233,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(233,100,367,340);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(367,100,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أفريقيا"
    },
    {
      "id": "bd",
      "name": "بنغلاديش",
      "emoji": "🇧🇩",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Bangladesh\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(280,220,60,60);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "آسيا"
    },
    {
      "id": "dz",
      "name": "الجزائر",
      "emoji": "🇩🇿",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Algeria Flag\");\n    setbkcolor(8);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,300,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(300,100,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(300,220,60,60);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(315,220,50,50);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,300,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(300,220,60,60);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(325,220,50,50);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    int star[]={335,205,342,220,360,220,345,230,350,250,335,235,320,250,325,230,310,220,328,220,335,205};\n    fillpoly(11,star);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    line(300,100,300,340);\n    getch();\n    closegraph();\n}",
      "difficulty": "متقدم",
      "category": "أفريقيا"
    },
    {
      "id": "tn",
      "name": "تونس",
      "emoji": "🇹🇳",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Tunisia Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(300,220,70,70);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    fillellipse(300,220,50,50);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(310,220,40,40);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    int star[]={315,205,320,218,335,218,323,228,328,243,315,233,302,243,307,228,295,218,310,218,315,205};\n    fillpoly(11,star);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "أفريقيا"
    },
    {
      "id": "ma",
      "name": "المغرب",
      "emoji": "🇲🇦",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Morocco\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    int star[]={300,175,312,210,350,210,320,230,332,265,300,245,268,265,280,230,250,210,288,210,300,175};\n    fillpoly(11,star);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "أفريقيا"
    },
    {
      "id": "pk",
      "name": "باكستان",
      "emoji": "🇵🇰",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Pakistan Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,200,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    fillellipse(330,220,60,60);\n    setcolor(2);\n    setfillstyle(SOLID_FILL,2);\n    fillellipse(345,210,55,55);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    int star[]={360,180,368,195,385,195,372,208,378,225,360,215,342,225,348,208,335,195,352,195,360,180};\n    fillpoly(11,star);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "آسيا"
    },
    {
      "id": "vn",
      "name": "فيتنام",
      "emoji": "🇻🇳",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Vietnam Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    int star[]={300,160,317,210,370,210,328,240,345,290,300,260,255,290,272,240,230,210,283,210,300,160};\n    fillpoly(11,star);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "آسيا"
    },
    {
      "id": "pl",
      "name": "بولندا",
      "emoji": "🇵🇱",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Poland\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,220);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,220,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "ua",
      "name": "أوكرانيا",
      "emoji": "🇺🇦",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Ukraine\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,100,500,220);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(100,220,500,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "سهل",
      "category": "أوروبا"
    },
    {
      "id": "se",
      "name": "السويد",
      "emoji": "🇸🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Sweden\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,100,500,340);\n    setcolor(14);\n    setfillstyle(SOLID_FILL,14);\n    bar(100,200,500,240);\n    bar(220,100,260,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "أوروبا"
    },
    {
      "id": "dk",
      "name": "الدنمارك",
      "emoji": "🇩🇰",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Denmark\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,200,500,240);\n    bar(220,100,260,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "أوروبا"
    },
    {
      "id": "fi",
      "name": "فنلندا",
      "emoji": "🇫🇮",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Finland\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,340);\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,200,500,240);\n    bar(220,100,260,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "أوروبا"
    },
    {
      "id": "is",
      "name": "آيسلندا",
      "emoji": "🇮🇸",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Iceland\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(1);\n    setfillstyle(SOLID_FILL,1);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,195,500,245);\n    bar(215,100,265,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,205,500,235);\n    bar(225,100,255,340);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "أوروبا"
    },
    {
      "id": "ch",
      "name": "سويسرا",
      "emoji": "🇨🇭",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Switzerland Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,100,500,340);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(270,150,340,290);\n    bar(240,190,370,250);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متوسط",
      "category": "أوروبا"
    },
    {
      "id": "gr",
      "name": "اليونان",
      "emoji": "🇬🇷",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Greece\");\n    setbkcolor(7);\n    cleardevice();\n    int y=100;\n    for(int i=0; i<9; i++) {\n        if(i%2==0) setcolor(9);\n        else setcolor(15);\n        setfillstyle(SOLID_FILL,(i%2==0)?9:15);\n        bar(100,y,500,y+27);\n        y+=27;\n    }\n    setcolor(9);\n    setfillstyle(SOLID_FILL,9);\n    bar(100,100,220,208);\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,145,220,163);\n    bar(152,100,170,208);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "أوروبا"
    },
    {
      "id": "ge",
      "name": "جورجيا",
      "emoji": "🇬🇪",
      "code": "#include<graphics.h>\n#include<conio.h>\n\nmain() {\n    initwindow(600,400,\"Georgia Flag\");\n    setbkcolor(7);\n    cleardevice();\n    setcolor(15);\n    setfillstyle(SOLID_FILL,15);\n    bar(100,100,500,340);\n    setcolor(4);\n    setfillstyle(SOLID_FILL,4);\n    bar(100,205,500,235);\n    bar(285,100,315,340);\n    bar(180,150,210,160);\n    bar(190,140,200,170);\n    bar(390,150,420,160);\n    bar(400,140,410,170);\n    bar(180,285,210,295);\n    bar(190,275,200,305);\n    bar(390,285,420,295);\n    bar(400,275,410,305);\n    setcolor(0);\n    rectangle(100,100,500,340);\n    getch();\n}",
      "difficulty": "متقدم",
      "category": "آسيا"
    }
  ]
};
  

// قراءة ID من URL
function getID() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// دالة مساعدة لتحويل الرموز ومنع اختفاء النصوص
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function highlightSyntax(code) {
    // أول شي نسوي Escape للنص الاصلي حتى لا يعتبره المتصفح تاكات HTML
    let highlighted = escapeHtml(code);

    // هسه نبدي نلون (الترتيب مهم)
    highlighted = highlighted
        // Preprocessor (#include)
        .replace(/#include/g, '<span class="preprocessor">#include</span>')
        // Header Files inside < >
        .replace(/&lt;(.*?)&gt;/g, '&lt;<span class="header-file">$1</span>&gt;')
        // Keywords
        .replace(/\b(int|void|float|char|double|if|else|for|while|return)\b/g, '<span class="keyword">$1</span>')
        // Special Keyword (main)
        .replace(/\b(main)\b/g, '<span class="function" style="color:#dcdcaa;">main</span>')
        // Functions (Standard Graphics Functions)
        .replace(/\b(initwindow|setbkcolor|cleardevice|setcolor|setfillstyle|bar|fillellipse|rectangle|getch|line|circle|outtextxy|closegraph|fillpoly|floodfill)\b/g, '<span class="function">$1</span>')
        // Constants (LIKE_THIS)
        .replace(/\b([A-Z_][A-Z0-9_]*)\b/g, '<span class="constant">$1</span>')
        // Numbers
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        // Strings (بين علامات اقتباس)
        .replace(/&quot;(.*?)&quot;/g, '<span class="string">"$1"</span>');

    return highlighted;
}

function showFlag() {
    const id = getID();
    const div = document.getElementById('content');
    
    if (!id || !allFlagsData.flags.find(f => f.id === id)) {
        // ... (نفس كود الخطأ القديم) ...
        return;
    }
    
    const flag = allFlagsData.flags.find(f => f.id === id);
    document.getElementById('page-title').textContent = flag.name;
    
    // معالجة الأسطر
    const lines = flag.code.split('\n');
    const lineNumbers = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
    
    // استدعاء دالة التلوين الجديدة
    const highlightedCode = highlightSyntax(flag.code);
    
    div.innerHTML = `
        <div class="flag-page">
            <a href="index.html" class="back-link">← العودة للقائمة</a>
            
            <div class="flag-card">
                <h1 class="flag-title">${flag.name}</h1>
                <img src="https://flagcdn.com/w320/${flag.id}.png" alt="${flag.name}" class="flag-img">
            </div>
            
            <div class="code-box">
                <div class="code-header">
                    <span class="code-title">
                        <span style="color: #519aba">C++</span> ${flag.name}.cpp
                    </span>
                    <button class="copy-btn" onclick="copyCode()">
                        <span>❏</span> <span>نسخ الكود</span>
                    </button>
                </div>
                
                <div class="code-wrapper">
                    <div class="line-numbers">${lineNumbers}</div>
                    <pre><code id="code">${highlightedCode}</code></pre>
                </div>
                <div id="msg" class="success-msg">✓ تم النسخ!</div>
            </div>
        </div>
    `;
}

// دالة النسخ (تأكد انها تنسخ النص الاصلي مو HTML)
function copyCode() {
    const id = getID();
    const flag = allFlagsData.flags.find(f => f.id === id);
    
    if(flag) {
        navigator.clipboard.writeText(flag.code).then(() => {
            const btn = document.querySelector('.copy-btn');
            const msg = document.getElementById('msg');
            
            btn.classList.add('copied');
            btn.innerHTML = '<span>✓</span> <span>تم!</span>';
            msg.style.display = 'block';
            
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerHTML = '<span>📋</span> <span>نسخ</span>';
                msg.style.display = 'none';
            }, 2000);
        });
    }
}
window.addEventListener('DOMContentLoaded', showFlag);
