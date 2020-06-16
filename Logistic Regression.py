# -*- coding: utf-8 -*-
"""
로지스틱 회귀 Logistic Regression
"""

# 1.library 선언
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from statsmodels.formula.api import glm
from statsmodels.genmod.families import Binomial

# 2.데이터 불러오기
challenger = pd.read_csv("challenger_data.csv")

# 3.요약 테이블 생성
df = pd.DataFrame()
df['temp'] = np.unique(challenger.Temperature)
df['failed'] = 0
df['ok'] = 0
df['total'] = 0
df.index = df.temp.values

# 4.온도별 이륙 성공여부 체크
for ii in range(challenger.shape[0]):
    curTemp = challenger.Temperature[ii]
    curVal = challenger.Incident[ii]
    df.loc[curTemp,'total'] += 1
    if curVal == 1:
        df.loc[curTemp, 'failed'] += 1
    else:
        df.loc[curTemp, 'ok'] += 1 

# 5.로지스틱 모델링
model = glm("failed ~ temp", data = df, family = Binomial()).fit()
print(model.summary())

# 6.로지스틱 모델 플롯
fig = plt.figure()
sns.lmplot(x = "Temperature", y = "Incident", data = challenger, logistic = True)
plt.title("Defects of the Space Shuttle O-Rings vs temperatue", position = (0.5, 1.0+0.05), fontsize = 15)
plt.xlabel('Outside Temperature[F]')
plt.ylabel('Demage Incident')