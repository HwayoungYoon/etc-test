var currentQ = -1;
    var user_gender = 1;
    var user_type = 0;
    var aa = {a:0,b:0, c:0,d:0, e:0,f:0, g:0,h:0 }
    var questions = [
        ["나의 성별을 선택해주세요", "", "여자", "", "남자"],
        ["나의 패션 스타일은","b","클래식","a","믹스매치(캐주얼)"],
        ["나는 낯선 사람과 술을 마셔야 한다면","g","맥주","h","칵테일","d","소주"],
        ["나는 평생 한 곳에만 살 수 있다면","h","휘황찬란한 궁전","g","수수하고 편안한 집"],
        ["나는 사랑을 나눌 때","d","리드하는 편","c","따라가는 편"],
        ["나는 노래방을 가면","e","춤을 춘다.","f","노래를 부른다."],
        ["나는 여행지로","a","산이 좋다.","b","바다가 더 좋다."],
        ["나는 장거리여행을 간다면","g","가장 친한 친구","h","가장 사랑하는 사람"],
        ["나는 주로","e","도시를 찍는다.","f","자연을 찍는다."],
        ["나는 휴식을 할 때 ","c","공연을 보러간다.","d","공원에서 휴식을 취한다."],
        ["나는 예술 작품을 볼 때","d","신중하게 의도를 분석한다.","c","있는 그대로 즐긴다."],
        ["나는 둘 중의 하나만 가질 수 있다면","e","돈이 좋다.","f","권력이 좋다."],
        ["나는 애인을 소개받을 때","b","얼굴(외모)","a","느낌(바이브)"],
    ]
    var result_idx_table = ["aceg","acfg","adfg","adeg","aceh","acfh","adfh","adeh","bceh","bcfh","bdfh","bdeh","bceg","bcfg","bdfg","bdeg"]
    var result_table = {
        "aceg":["한국","서울","9E40F3","러시아","<div class='t1'>여행 성향</div><div class='tt1'>당신은 새롭고 다양한 기회를 좋아합니다. 빠르게 결과를 향해 행동해 성급해보일 수 있으나, 솔선수범하는 당신을 친구들은 의지하고 함께하고 싶어합니다. 이런 당신의 도전에 친구들은 조언과 격려를 아끼지 않습니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 한국이고 빠름과 도전을 중시하는 <b>대한민국 - 서울</b>입니다. 서울은 강력한 문화적 기반과 세련된 도시문화로 빠르게 세계 문화 중심지로 급부상하고 있습니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>러시아 - 모스크바</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "acfg":["아랍에미리트","두바이","0CBBEE","브라질","<div class='t1'>여행 성향</div><div class='tt1'>당신은 꿈을 꾸며 행동하는 사람입니다. 그리고 그 꿈을 향한 과정 속에서 직접적인 답을 제시하는 사람입니다. 친구들의 마음을 잘 헤아려 고민을 해결해주기도 합니다. 어느 상황에서도 친구들의 기대를 받으며, 조금 더 크게 성장하고 싶다는 마음을 품고 있습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 꿈과 희망의 도시 <b>아랍에미리트 - 두바이</b>입니다. 두바이는 페르시아 만 남동쪽 해안에 위치한 아랍에미리트의 최대 도시로, 중동과 페르시아 만 지역의 문화 중심지입니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>브라질 - 리우데자네이루</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "adfg":["스페인","바르셀로나","FFBC3D","이탈리아","<div class='t1'>여행 성향</div><div class='tt1'>당신은 평소 빠른 것을 즐기지 않고, 천천히 여유를 갖는 편입니다. 그러나 놀 기회가 왔을 때 세상에게 가장 열심히 즐기는 사람으로 돌변합니다. 춤과 예술을 사랑하며, 열정적인 성격에 매료되어 주위에 애인친구가 많습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 열정과 휴식을 중시하는 <b>스페인 - 바르셀로나</b>입니다. 바르셀로나는 세계 10대 해변 도시 중 1위에 랭크된 적이 있는 아름다운 도시로, 가우디의 건축물로 유명한 문화, 경제 도시입니다.<br>전체 인구의 <font style='color:red'>4%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>이탈리아 - 밀라노</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "adeg":["독일","베를린","E2535A","호주","<div class='t1'>여행 성향</div><div class='tt1'>당신은 문제를 해결하는 것을 즐깁니다. 스스로의 성취에 대한 만족도가 높으며, 특히 어려운 문제를 좋아합니다. 꼼꼼하고 신중한 성격 탓에 여행에서 일정을 짜고, 준비물을 챙기는 역할을 맡습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 신중함과 배움을 중시하는 <b>독일 - 베를린</b>입니다. 베를린은 현대 미술과 디자인, 클럽 문화의 중심이면서 베를린 필하모닉, 베를린 국제영화제 등 다양한 문화적 유산이 공존하는 도시입니다.<br>전체 인구의 <font style='color:red'>6%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>호주 - 시드니</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "aceh":["일본","도쿄","FF8879","싱가포르","<div class='t1'>여행 성향</div><div class='tt1'>당신은 맡은 것을 무조건 해결하고자 하는 책임감이 강합니다. 책임 소재가 명확하지 않음에도 수습하려고 달려들며, 이런 모습에 친구들은 당신을 신뢰합니다. 또한, 당신의 결정은 언제나 친구들의 지지를 받습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 단정하고 조용한 배려가 있는 <b>일본 - 도쿄</b>입니다. 세계적인 다국적 기업의 본사가 가장 많이 밀집한 도시이며, 20세기 세계 최고의 도시였던 도쿄는 여전히 스트릿하고 독특한 에너지와 고풍스러운 옛스러움이 공존합니다.<br>전체 인구의 <font style='color:red'>8%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>싱가포르 - 싱가포르</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "acfh":["핀란드","헬싱키","6BB499","영국","<div class='t1'>여행 성향</div><div class='tt1'>당신은 첫인상이 좋다는 말을 자주 듣습니다. 의견을 자유롭게 제시하며, 유연하며 부드러운 관계를 선호합니다. <br>성실함을 중시하며, 같이 있으면 편안하다는 소리를 자주 듣습니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 성실함과 존중을 중시하는 <b>핀란드 - 헬싱키</b>입니다. 약 60만명의 인구를 가진 작은 도시인 헬싱키는 사우나와 헤비메탈이 공존하는 쌀쌀한 북유럽 도시입니다. 침묵의 캄피 예배당에서 평화와 고요함을 가져보는건 어떨까요.<br>전체 인구의 <font style='color:red'>1%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>영국 - 런던</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "adfh":["프랑스","파리","C09091","베트남","<div class='t1'>여행 성향</div><div class='tt1'>당신은 사람과 상황에 대해 낙관적인 경향이 있습니다. 평소 대화를 주도하는 편이며, 단도직입적으로 말하는 것을 좋아합니다. 이런 성격 탓에 술을 마시는 것 보다는 술을 마시는 분위기를 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 낭만과 대화를 중시하는 <b>프랑스 - 파리</b>입니다. 빛에 도시라는 애칭을 가진 파리는 세계 예술과 문화, 낭만의 수도이며, 피카소, 마티스, 고흐, 살바도르 달리 등 여러 예술가가 사랑했던 도시이며, 현재에도 끝없는 영감을 주는 도시입니다. 한편으로 파리는 유럽의 중요한 금융도시이기도 합니다.<br>전체 인구의 <font style='color:red'>5%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>베트남 - 하노이</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "adeh":["체코","프라하","F39B4A","미국","<div class='t1'>여행 성향</div><div class='tt1'>당신은 남의 말을 잘 들어주며, 한 번 들은 비밀 이야기는 무덤까지 가져가는 편입니다. 진지하면서도 위트있는 대화로 친구들의 매번 당신의 이야기에 귀를 기울이고 있습니다. 속 깊은 이야기를 나눌 수 있는 당신을 친구들은 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 독창적이고 자유로운 기풍을 가진 <b>체코 - 프라하</b>입니다. 블타바 강을 중심으로 만들어진 프라하는 중세/19세기 유럽의 모습을 잘 간직하고 있으며, 메멘토 모리의 낙서들이 장난스럽게 곳곳에 남겨져 있습니다.<br>전체 인구의 <font style='color:red'>5%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>미국 - LA</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bceh":["러시아","모스크바","0C266B","한국","<div class='t1'>여행 성향</div><div class='tt1'>당신은 낯을 가려 처음에 바로 다가가기는 어렵지만, 시간을 두고 진지한 관계를 형성하는 것을 좋아합니다. 매번 논리적으로 말을 하고자 하며, 해야 할 일이 생기면 직접 하기를 좋아합니다. 가끔 당신의 용기 있는 행동에 친구들은 놀라곤 합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 논리적이고 지적 융성함을 지닌 <b>러시아 - 모스크바</b>입니다. 세계에서 4번째로 큰 도시인 모스크바는 기계공업과 학술문화의 중심지로 명성이 높습니다.<br>전체 인구의 <font style='color:red'>10%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>한국 - 서울</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div><br><br>"],
        "bcfh":["브라질","리우데자네이루","4FD7BE","아랍에미리트","<div class='t1'>여행 성향</div><div class='tt1'>당신은 그룹 활동에서 항상 앞장서 놀 곳을 정하는 편입니다. 흥이 주체하지 못하며, 그런 모습에 그룹의 분위기가 흥이 넘치는 분위기로 탈바꿈합니다. 의기소침해있는 친구에게 힘이 나는 말을 자주 해주며, 용기를 북돋아주는 능력 역시 탁월해 친구들과의 약속이 많습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 사람간의 관계와 흥을 중시하는 <b>브라질 - 리우데자네이루</b>입니다. 정열의 도시 리우는 삼바와 보사노바가 시작된 곳으로, 덥고 습한 기후를 가지고 있으며 세계적인 축제인 카니발이 매년 개최되는 곳입니다.<br>전체 인구의 <font style='color:red'>12%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>아랍에미레트 - 두바이</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bdfh":["이탈리아","밀라노","CFA091","스페인","<div class='t1'>여행 성향</div><div class='tt1'>당신은 의사 표현이 매우 자유로우며, 공격적이라는 말까지 듣기도 합니다. 자유로운 사고와 유창한 언어 센스로 주위에 애인 친구가 많습니다. 활발하면서도 매력 넘치는 모습에 누구나 당신과 친구가 되고 싶을 것입니다. </div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 멋과 사랑이 공존하는 <b>이탈리아 - 밀라노</b>입니다. 밀라노는 세계 패션과 디자인의 중심지이며 재능 있는 예술인이 많은 곳입니다. 매력 있는 사람과 함께하며 그 사이에서 본인의 매력을 뽐내기를 좋아하는 당신과 가장 잘 어울리는 여행지입니다.<br>전체 인구의 <font style='color:red'>9%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>스페인 - 바르셀로나</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bdeh":["호주","시드니","9FA9D1","독일","<div class='t1'>여행 성향</div><div class='tt1'>당신은 밖을 좋아하는 사람입니다. 친구들과 아웃도어 활동, 스포츠나 액티비티를 즐기는 것을 좋아합니다. 또한, 휴식을 취할 때에도 여유 있게 밖에서 산책을 즐기거나 공원을 가는 것을 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 활달하지만 아름다운 <b>호주 - 시드니</b>입니다. 호주 최대의 도시 시드니는 오페라 하우스와 하버 브릿지를 랜드마크로 지니고 있으며, 항상 활달하고 높은 에너지와 그림 같은 아름다움을 함께 지니고 있는 도시입니다.<br>전체 인구의 <font style='color:red'>3%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>독일 - 베를린</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bceg":["미국","LA","F178C3","체코","<div class='t1'>여행 성향</div><div class='tt1'>당신은 다양한 분야의 지식을 가진 사람입니다. 활동적이며, 새로운 경험과 시도를 통해 배움을 얻기를 원합니다. 또한, 일할 때는 하고, 쉴 때는 쉬어야 한다 생각합니다. 친구들도 당신의 높은 집중력을 알고 있습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>로스엔젤레스는 미국 서부에 위치한 '천사의 도시'라는 별명을 가졌습니다.<br>예측 불가한 새로움과 꿈 같은 시간을 꿈꾸는 당신이랑 어울리는 여행지입니다. <br>전체 인구의 <font style='color:red'>9%</font>만이 당신과 같은 여행 성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>체코 - 프라하</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bcfg":["싱가포르","싱가포르","7258D8","일본","<div class='t1'>여행 성향</div><div class='tt1'>당신은 속도보다는 정확성에 더 집중하는 편입니다. 가이드 라인을 잘 벗어나지 않으며, 세부사항에 특히 신경을 많이 씁니다. 자칫 삭막해질 수 있는 분위기를 만들면서도 웃음을 잃지 않아 주변 사람들이 기운낼 수 있도록 돕습니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 문화와 예절을 중시하는 <b>싱가포르 - 싱가포르</b>입니다. <br>싱가포르는 강력한 행정력을 지닌 도시국가이며, 디테일과 질서를 중시해 안정감 있는 편안함을 추구하는 도시입니다.<br>전체 인구의 <font style='color:red'>2%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>일본 - 도쿄</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bdfg":["베트남","하노이","F67D25","프랑스","<div class='t1'>여행 성향</div><div class='tt1'>당신은 자신에 대한 믿음이 강한 사람입니다. 긍정적이고 부드러운 성격을 지녀 친구들이 다툴 때 중간에서 화해를 시키곤 합니다. 또한, 미래에 대한 큰 걱정보다는 오늘의 행복에 집중하고 즐기는 편입니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 문화와 예절을 중시하는 <b>베트남 - 하노이</b>입니다. <br>하노이는 자연과 어우러진 아름다운 강과 호수를 가지고 있으며, 오랜 전통을 바탕으로 성장한 도시입니다.<br>전체 인구의 <font style='color:red'>7%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>프랑스 - 파리</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
        "bdeg":["영국","런던","4A608D","핀란드","<div class='t1'>여행 성향</div><div class='tt1'>당신은 창의적이라는 말을 자주 들으며, 영감을 얻기 위해 외부 활동이 잦습니다. 특히 인정 욕구가 강해, 인정을 받기 위해 노력을 끊임 없이 합니다. 또한, 친구들 사이에서 당신은 매너가 좋기로 유명합니다. 남을 배려하는 따뜻한 마음으로 친구들은 당신을 좋아합니다.</div><div class='t2'>찰떡 여행지</div><div class='tt2'>이러한 당신에게 어울리는 여행지는 문화와 예절을 중시하는 <b>영국 - 런던</b>입니다. 런던은 세계 근대 산업 발전의 핵심 도시 역할을 한 동시에 다양한 엔터테인먼트가 있는 도시입니다. 공원, 뮤지컬, 스포츠 등 다양한 경험을 좋아하는 당신과 어울리는 여행지 입니다.<br>전체 인구의 <font style='color:red'>6%</font>만이 당신과 같은 여행성향을 가지고 있습니다.</div><div class='t3'>찰떡 궁합</div><div class='tt3'>당신은 <b>핀란드 - 헬싱키</b> 여행자와 가장 궁합이 잘 맞습니다. 친구들의 검사결과와 비교해보세요!</div>"],
    }

    function openModal(){
        window.scrollTo(0,0);

        $("#app-desc-modal").css("opacity",1)
        $("#app-desc-modal").css("display","block")
    }

    function close_modal(){
        $("#app-desc-modal").css("opacity",0)
        setTimeout(function(){
            $("#app-desc-modal").css("display","none")
        },500)
    }

    function typingQuestion(str, func){
        var idx = 0;
        var interval = setInterval(function(){
            $(".question").text(str.slice(0,idx)+ "_")
            idx++;
            if(str.length < idx){
                $(".question").text(str)
                clearInterval(interval)
                func && func()
            }
        },15)
    }
    function nextQuestion(){
        currentQ++;
        var q = questions[currentQ]
        if(q == null){
            finishQuestion();
        }else{
            var qq = q[0]
            if(user_type == 2){
                qq = qq.replace("나는", "그(녀)는")
                qq = qq.replace("나의", "그(녀)의")
            }
            typingQuestion("Q. "+qq, function(){
                $(".answer-box").html('<div class="answer-a" onclick="select_answer(\''+q[1]+'\',\'a\')">'+q[2]+'</div>' + '<div class="answer-b" onclick="select_answer(\''+q[3]+'\',\'b\')">'+q[4]+'</div>');
                $(".left-count").text("("+ (currentQ+1) +"/"+ questions.length +")")
            })
        }
    }
    function finishQuestion(){
        $(".question").text("")
        $(".question").css("width","0")

        $("#calc-page").css("opacity","0")
        $("#calc-page").css("display","block")
        setTimeout(function(){
            $("#calc-page").css("opacity","1")
        }, 300);

        $("#result-page").css("opacity","0")
        $("#result-page").css("display","block")
        setTimeout(function(){
            $("#test-page").remove()
            $("#calc-page").css("opacity","0")
            $("#result-page").css("opacity","1")

            setResult();

            setTimeout(function(){
                $("#calc-page").remove()
            }, 300);
        }, 5000);       
    }
    function setResult(type){
        $("#test-page").remove()
        setTimeout(function(){
            $("#calc-page").remove()
        }, 300);

        $("#result-page").css("display","block")
        $("#result-page").css("opacity","1")

        type = type || (aa.a > aa.b ? "a" : "b") + (aa.c > aa.d ? "c" : "d") + (aa.e > aa.f ? "e" : "f") + (aa.g > aa.h ? "g" : "h")
        var idx = result_idx_table.indexOf(type)
        var data = result_table[type]
        var r = parseInt(data[2].slice(0,2), 16)
        var g = parseInt(data[2].slice(2,4), 16)
        var b = parseInt(data[2].slice(4,6), 16)

        $("#result-page .background-img").css("background-image","url(/img/trips/"+(idx+1)+".jpg?v=1)")
        $("#result-page .place-box").css("background-color","#"+data[2])
        $("#result-page .place-box span").text(data[0] + " " + data[1])
        $("#result-page .place-box .char img").attr("src", "/img/faces/"+(idx+1)+"_"+user_gender+".png")
        $("#result-page .result").css("background", "linear-gradient(180deg, rgba("+r+","+g+","+b+",0) 0%, rgba("+r+","+g+","+b+",1) 22%, rgba("+r+","+g+","+b+",1) 100%)")

        $("#result-page .description").html(data[4])
        $("#result-page .app-btn span").html(data[3]+" 성향인 친구 만나러가기")

        if(user_type == 2){
            $("#result-page .header span").text("나에게 찰떡인 여행지 찾기")
            $("#result-page .title").text("당신의 이상형에게 찰떡인 여행지는")
        }
    }
    function select_answer(t, a){
        var el1 = $(".answer-"+a)
        var el2 = $(".answer-"+(a=="a" ? "b" : "a")) 
        if(currentQ == 0){
            user_gender = a=="a"?1:2;
        }else{
            aa[t]++;
        }

        $(".answer-box > div").css("opacity","1")
        $(".answer-box > div").css("width","100%")
        $(el1).css("animation","selected-anim 0.5s ease 0s 1 normal forwards");
        $(el2).css("animation","deselected-anim 0.5s ease 0s 1 normal forwards");

        setTimeout(function(){
            nextQuestion();
        },1000)
    }
    var started = false
    function start_test(ii){
        if(started) return ;

        started = true
        user_type = ii
        var el = $(ii == 1 ? ".yellow" : ".green")
        var el2 = $(ii == 1 ? ".green" : ".yellow")
        
        $(".title > div").css("opacity", "1")
        $(".title > div").css("animation-name", "down-fadeout-anim")
        $(".title > div").css("animation-delay", "0s")

        $(".bottom > .logo").css("opacity", "0")

        $(el).css("opacity", "1")
        $(el).css("animation", "down-wide-anim 1s ease 0s 1 normal forwards")
        $(el2).css("opacity", "1")
        $(el2).css("animation", "down-wide-anim 1s ease 0.5s 1 normal forwards")
        $("button.other").css("opacity", "1")
        $("button.other").css("animation", "down-wide-anim 1s ease 0.75s 1 normal forwards")

        $("#test-page").css("opacity","0")
        $("#test-page").css("display","block")
        setTimeout(function(){
            $("#test-page").css("opacity","1")
        },1500)
        setTimeout(function(){
            $("#main-page > .title").remove()
            $("#main-page > .bottom").remove()
        },7100)
        setTimeout(function(){
            $(".question").css("width","100%")
            setTimeout(function(){
                nextQuestion()
            },1000)
        },3000)
    }