# -*- coding: utf-8 -*-
"""
T 검정 T-test
"""

"""
단일표본 T검정(정규) """
# 1.library 선언
import numpy as np
import scipy.stats as stats

# 2.데이터 입력
data = np.array([5260,5470,5640,6180,6390,6515,6805,7515,7515,8320,8770])
checkValue = 7225

# 3.단일표본 T검정 통계량
stats.ttest_1samp(data, checkValue)

# 4.통계량 직접 계산
## 4.1.library 선언
import matplotlib.pyplot as plt
import numpy as np
import scipy.stats as stats

## 4.2.x(data), y(checkValue) 값 지정
y = np.array([109.4, 76.2, 128.7, 93.7, 85.6, 117.7, 117.2, 87.3, 100.3, 55.1])
x = list(range(10))

## 4.3.분포 확인을 위한 산점도
scatter = plt.scatter(x,y)
plt.axhline(y=100, color='r', linestyle='-')
plt.xlim = (x[0]-1, x[-1]+1)
plt.ylim = (np.min(y-1), np.max(y+1))
plt.xlabel('Student Number')
plt.ylabel('Score')

## 4.4.T-통계량
Tval = (100-np.mean(y))/np.sqrt(np.var(y)/float(len(y)))

## 4.5.분포표에서 P-value 계산
td = stats.t(len(y)-1)
P = td.sf(Tval)

## 4.6.T-통계량, P-통계량 출력
print('t-statistic = %6.4f p-value = %6.4f' % (Tval, P))


"""
단일표본 T검정(비모수) - Wilcoxon 부호 순위합 검정 """
# 1.library 선언
import numpy as np
import scipy.stats as stats

# 2.데이터 입력
data = np.array([5260,5470,5640,6180,6390,6515,6805,7515,7515,8320,8770])
checkValue = 7225

# 3. Wilcoxon 통계량
rank, pVal = stats.wilcoxon(data-checkValue)

# 4.통계량 출력
if pVal < 0.05:
    issignificant = 'unlikely'
else:
    issignificant = 'likely'
print(('It is ' + issignificant + ' that the value is {0:d}'.format(checkValue)))


"""
독립표본 T검정(정규) """
# 1.library 선언
import numpy as np
import scipy.stats as stats

# 2.데이터 입력
group1 = np.array([5260,5470,5640,6180,6390,6515,6805,7515,7515,8230,8770])
group2 = np.array([3910,4220,3885,5160,5645,4680,5265,5975,6790,6900,7335])

# 3.levene의 등분산 검정
(W, p) = stats.levene(group1, group2)
if p < 0.05:
    print('Warning: the P-value of the Levene test is <0.05: p=', p)

# 4.독립표본 T검정 통계량
t_statistic, pVal = stats.ttest_ind(group1, group2, equal_var = True)
print("T_statistic: {0:.2f}, P-value: {1:.2f}".format(t_statistic, pVal))


"""
독립표본 T검정(비모수) - Mann-Whitney U 검정 """
# 1.library 선언
import pandas as pd
import numpy as np
import scipy.stats as stats

# 2.데이터 입력
energ = pd.read_csv("altman94.txt", header=None)
group1 = energ[energ.iloc[:,1] == 1][0]
group2 = energ[energ.iloc[:,1] == 0][0]

# 3.두 그룹의 평균 확인
np.mean(group1)
np.mean(group2)

# 4.Mann-Whitney 통계량
u, p_value = stats.mannwhitneyu(group1, group2)
print("Mann-Whiteny test U-statistic", u)
print("Mann-Whiteny test P-value", p_value)


"""
대응표본 T검정 """
# 1.library 선언
import numpy as np
import scipy.stats as stats
import matplotlib.pyplot as plt

# 2.데이터 입력
np.random.seed(1234)
data = np.random.randn(10)+0.1
data1 = np.random.randn(10)*5
data2 = data1 + data

# 3.대응표본 T검정 통계량
# 3.1.두 표본의 차이를 단일표본으로 가정
stats.ttest_1samp(data, 0)

# 3.2.1.
stats.ttest_rel(data2, data1)
# 3.2.2.
(t, pVal) = stats.ttest_rel(data1, data2)
print('The probability that the two distributions are equal is {0:5.3f} .'.format(pVal))

# 4.분포확인 - Box plot
box_plot_data = [data1, data2]
box_labels = ["before", "after"]
plt.boxplot(box_plot_data, labels = box_labels)

# 5.차이추정
## 5.1.library 선언
import pandas as pd
import statsmodels.formula.api as sm
import numpy as np

## 5.2.차이추정 통계량
df = pd.DataFrame({'Data1': data1, 'Data2': data2})
result = sm.ols(formula = 'I(Data2-Data1) ~ 1', data = df).fit()
print(result.summary())