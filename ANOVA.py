# -*- coding: utf-8 -*-
"""
분산분석 ANOVA
"""

"""
일원분산분석 """
# 1.library 선언
import numpy as np
from scipy import stats
import pandas as pd
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm

# 2.데이터 입력
data = pd.read_csv("altman_910.txt", header=None)
data.columns = ['value', 'treatment']

group1 = data[data.iloc[:,1] == 1]["value"]
group2 = data[data.iloc[:,1] == 2]["value"]
group3 = data[data.iloc[:,1] == 3]["value"]

# 3.levene의 등분산 검정
(W, p) = stats.levene(group1, group2, group3)
if p < 0.05:
    print('Warning: the P-value of the Levene test is <0.05: p=', p)

# 4.One-way ANOVA
## 4.1.
F_statistic, pVal = stats.f_oneway(group1, group2, group3)
print((F_statistic, pVal))
if pVal < 0.05:
    print('One of the groups is significantly different.')

## 4.2.
model = ols('value ~ C(treatment)', data).fit()
anovaResults = anova_lm(model)
print(anovaResults)

## 4.3.두 경우 결과 비교(같으면 OUTPUT 없음)
np.testing.assert_almost_equal(F_statistic, anovaResults['F'][0])


"""
사후검정 """
# 1.library 선언
import matplotlib.pyplot as plt
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# 2.데이터 입력
plot_data = [group1, group2, group3]
df = pd.DataFrame(data, columns = ["value", "treatment"])

# 3.Tukey 사후검정
posthoc = pairwise_tukeyhsd(df['value'], df['treatment'], alpha = 0.05)
print(posthoc)

# 4.플롯확인(boxplot, 그룹별 값 비교 plot)
ax = plt.boxplot(plot_data)
fig = posthoc.plot_simultaneous()


"""
Kruskal-Wallis 검정(비모수) """
# 1.library 선언
import numpy as np
from scipy.stats.mstats import kruskalwallis

# 2.데이터 입력
city1 = np.array([68,93,123,83,108,122])
city2 = np.array([119,116,101,103,113,84])
city3 = np.array([70,68,54,73,81,68])
city4 = np.array([61,54,59,67,59,70])

# 3.Kruskal-Wallis 검정 통계량
h, p = kruskalwallis(city1, city2, city3, city4)

print("P value :", p)
if p < 0.05:
    print('There is a significant difference between the group.')
else:
    print('No significant difference between the group.')


"""
이원분산분석 """
# 1.library 선언
import pandas as pd
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_lm

# 2.데이터 입력
df = pd.read_csv("altman_12_6.txt", header=None)
df.columns = ["hs", "fetus", "observer"]

# 3.Two-way ANOVA
formula = 'hs ~ C(fetus) + C(observer) + C(fetus):C(observer)'
lm = ols(formula, df).fit()
anovaResults = anova_lm(lm)
print(anovaResults)


"""
삼원분산분석 """
# 1.library 선언
import matplotlib.pyplot as plt
import seaborn as sns

# 2.모델링
sns.set(style = "whitegrid")
df = sns.load_dataset("exercise")
sns.factorplot("time", "pulse", hue = "kind", col = "diet", 
               data = df, hue_order = ["rest", "walking", "running"],
               palette = "YlGnBu_d", aspect = .75).despine(left = True)