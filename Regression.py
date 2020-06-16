# -*- coding: utf-8 -*-
"""
선형회귀 Regression
"""

# 1.library 선언
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
from statsmodels.formula.api import ols
from io import StringIO

# 2.데이터 입력
data_str = '''Region Alcohol Tobacco
North 6.47 4.03
Yorkshire 6.13 3.76
Northeast 6.19 3.77
East_Midlands 4.89 3.34
West_Midlands 5.63 3.47
East_Anglia 4.52 2.92
Southeast 5.89 3.20
Southwest 4.79 2.71
Wales 5.27 3.53
Scotland 6.08 4.51
Northern_Ireland 4.02 4.56'''

df = pd.read_csv(StringIO(data_str), sep = r'\s+')

# 3.데이터 산점도 확인
df.plot('Tobacco', 'Alcohol', style = 'o')
plt.ylabel('Alcohol')
plt.title('Sales in Several UK Regions')

# 4.회귀분석
lm = ols('Alcohol ~ Tobacco', data = df[:-1]).fit()
print(lm.summary())

# 5.이상치 확인
lm = ols('Alcohol ~ Tobacco', data = df).fit()
print(lm.summary())


# 6.여러 통계량 직접 계산
## 6.1.X에 대한 Beta
i = 1
beta = lm.params[i]

## 6.2.X에 대한 std err
X = df.Tobacco[:-1]
X = np.vstack((np.ones(X.size), X))
X = np.matrix(X)
C = np.linalg.inv(X*X.T)
C *= lm.mse_resid
SE = np.sqrt(C)
se = SE[i,i]

## 6.3.X의 t 통계량
t = beta/se
print('t =', t)

## 6.4.X의 t 통계량에 대한 p-value
N = lm.nobs
p = lm.df_model + 1
dof = N - p
p_onesided = 1.0 - stats.t(dof).cdf(t)
p = p_onesided*2.0
print('p = {0:.3f}'.format(p))

## 6.5.신뢰구간
### 6.5.1.Beta0의 신뢰구간
i = 0
beta, c = lm.params[i], SE[i,i]
N = lm.nobs
P = lm.df_model
dof = N-P-1
z = stats.t(dof).ppf(0.975)
print(beta-z*c, beta+z*c)

### 6.5.1.X(Beta1)의 신뢰구간
i = 0
beta, c = lm.params[i], SE[i,i]
N = lm.nobs
P = lm.df_model
dof = N-P-1
z = stats.t(dof).ppf(0.975)
print(beta-z*c, beta+z*c)

## 6.6.잔차분석
### 6.6.1.Skewness & Kurtosis
Y = df[:-1]["Alcohol"]
d = Y - lm.fittedvalues
S = np.mean(d**3.0)/np.mean(d**2.0)**(3.0/2.0)
K = np.mean(d**4.0)/np.mean(d**2.0)**(4.0/2.0)
print('Skewness: {:.3f}, Kurtosis: {:.3f} '.format(S, K))

### 6.6.2.Omnibus 검정
(K2, p) = stats.normaltest(lm.resid)
print('Omnibus: {0:.3f}, p-value = {1:.2f}'.format(K2, p))

### 6.6.3.Durbin-Watson
DW = np.sum(np.diff(lm.resid.values)**2.0)/lm.ssr
print('Durbin-Watson: {:.5f}'.format(DW))

### 6.6.4.Jaque-Bera Test
JB = (N/6.0)*(S**2.0 + (1.0/4.0)*(K-3.0)**2.0)
p = 1.0 - stats.chi2(2).cdf(JB)
print('JB-statistic: {:.5f}, p-value: {:.5f}'.format(JB, p))

### 6.6.5.Condition Number
X = np.matrix(X)
EV = np.linalg.eig(X*X.T)
CN = np.sqrt(EV[0].max()/EV[0].min())
print('Condition No.: {:.5f}'.format(CN))


"""
회귀식 계수 직접 계산
"""
import pandas as pd
import numpy as np

x = np.array([15.3,10.8,8.1,19.5,7.2,5.3,9.3,11.1,7.5,12.2,6.7,5.2,19.0,15.1,6.7,4.2,10.3,12.5,16.1,13.3,4.9,8.8,9.5])
y = np.array([1.76,1.34,1.27,1.47,1.27,1.49,1.31,1.09,1.18,1.22,1.25,1.19,1.95,1.28,1.52,1.12,1.37,1.19,1.05,1.32,1.03,1.12,1.70])

# y = a + bx 의 a와 b 계산
n = len(x) # number of samples(표본갯수)

Sxx = np.sum(x**2) - np.sum(x)**2/n
Sxy = np.sum(x*y) - np.sum(x)*np.sum(y)/n
mean_x = np.mean(x)
mean_y = np.mean(y)

b = Sxy/Sxx
a = mean_y - b*mean_x
print('y = {0:.4f} + {1:.4f}x'.format(a, b))