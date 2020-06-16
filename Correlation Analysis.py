# -*- coding: utf-8 -*-
"""
상관분석 Correlation Analysis
"""

# 1.산점도 확인
import seaborn as sns
sns.set()
df = sns.load_dataset("iris")
sns.pairplot(df, hue = "species", size = 2.5)

# 2.상관계수
## 2.1.library 선언
import pandas as pd
from scipy import stats

## 2.2.데이터 입력
data = pd.read_csv("altman_11_1.txt", header=None)
data.columns = ['vcf', 'glucose']

y = data.vcf
x = data.glucose

## 2.3.상관계수 모음
corr = {}
### Pearson Correlation
corr['Pearson'], _ = stats.pearsonr(x, y)
### Spearman Correlation
corr['Spearman'], _ = stats.spearmanr(x, y)
### Kendall's Tau
corr['Kendall'], _ = stats.kendalltau(x, y)
print(corr)

# 3.상관행렬 플롯
## 3.1.library 선언
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

## 3.2.데이터 입력
rs = np.random.RandomState(0)
df = pd.DataFrame(rs.normal(size = (10, 10)))
df.corr()

## 3.3.상관행렬 플롯 생성
plt.figure(figsize = (10, 8))
sns.heatmap(df.corr(), annot = True, fmt = '.2f', cmap = 'Blues')
plt.title("Correlations", position = (0.5, 1.0+0.05), fontsize = 15)