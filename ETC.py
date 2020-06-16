# -*- coding: utf-8 -*-
"""
정규성 검정
"""
# 1.library 선언
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy.stats as stats

# 2.파라미터 N(0,3^2) 생성
myMean = 0
mySD = 3

# 3.초기값, 정규 난수 생성
np.random.seed(1234)
data = stats.norm.rvs(myMean, mySD, 1000)

# 4.분포 확인 위한 plot(hist, Q-Q)
plt.hist(data)
stats.probplot(data, plot=plt)

# 5.normal test
stats.normaltest(data)

# 6.omnibus test
pVals = pd.Series()
_, pVals['Omnibus'] = stats.normaltest(data)

print('P-values for all {0} data points:'.format(len(data)))
print(pVals)

if pVals['Omnibus'] > 0.5:
    print("Data are normally distributed")


"""
alpha와 beta를 고려한 표본 수 계산
"""
# 1.library 선언
from statsmodels.stats import power

# 2.표본 수 계산
nobs = power.tt_ind_solve_power(effect_size = 0.5, alpha = 0.05, power = 0.8)
print(nobs)


"""
관측치의 형태
"""
# Boolean
condition = False
if condition == True:
    print("OK")
else:
    print("Try again")

# String
str = "Female"
print("The String(", str, ") is of type", type(str))

# Numbers: int
num = 2
print("The number(", num, ") is of type", type(num))

# Numbers: float
num = 3.0
print("The number(", num, ") is of type", type(num))

# Numbers: complex
num = 3+5j
print("The number(", num, ") is of type", type(num))


"""
신뢰구간
"""
# 1.library 선언
import numpy as np

# 2.신뢰구간 계산
p = 10/100000
n = 2500
lower = n*p - 1.96*np.sqrt(n*p*(1-p))
upper = n*p + 1.96*np.sqrt(n*p*(1-p))
print("The 95% confidence interval for the incidence of breast cancer is from {0:.1f} to {1:.1f}".format(lower, upper))


"""
3차원 플롯 프로그램
"""
# 1.library 선언
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib import cm

# 2.데이터 입력
x = np.linspace(-5, 5, 101)
(X, Y) = np.meshgrid(x, x)

np.random.seed(987654321)
Z = -5 + 3*X - 0.5*Y + np.random.randn(np.shape(X)[0], np.shape(X)[1])
myCmap = cm.GnBu_r

# 3.plot 생성
fig = plt.figure()
ax = fig.gca(projection = '3d')
surf = ax.plot_surface(X, Y, Z, cmap = myCmap, rstride = 2, cstride = 2,
                       linewidth = 0, antialiased = False)
ax.view_init(20, -120)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
fig.colorbar(surf, shrink = 0.6)
plt.title("3D plot", position = (0.5, 1.0+0.05), fontsize = 15)


"""
VIF
"""
# 1.library 선언
import pandas as pd
from sklearn.datasets import load_boston
from statsmodels.stats.outliers_influence import variance_inflation_factor
from patsy import dmatrices

# 2.데이터 입력
boston = load_boston()
df = pd.DataFrame(boston.data, columns = boston.feature_names)
df['PRICE'] = boston.target

# 3.VIF
y, X = dmatrices('PRICE ~ CRIM + ZN + INDUS + CHAS + NOX + RM + DIS + RAD + TAX + PTRATIO + B + LSTAT + AGE', df, return_type='dataframe')
vif = pd.DataFrame()
vif["VIF Factor"] = [variance_inflation_factor(df.values, i) for i in range(X.shape[1])]
vif["feature"] = X.columns
vif