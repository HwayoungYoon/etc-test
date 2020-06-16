# -*- coding: utf-8 -*-
"""
교차표검정 Cross table Test
"""

""" 카이제곱검정 """
# 1.library 선언
import numpy as np
from scipy.stats import chi2_contingency

# 2.데이터 입력
data = np.array([[43,9],[44,4]])

# 3.카이제곱검정 통계량
chi2, p, dof, ex = chi2_contingency(data)
print("Chi-square:", chi2)
print("P-value:", p)
print("Degree of freedom:", dof)

# 4.Oneway-카이제곱검정
from scipy import stats
obs = [4,6,14,10,16]
stat, p = stats.chisquare(obs)
print("P-value: {0:.4f}".format(p))


""" 피셔의 정확검정 """
# 1.library 선언
import numpy as np
from scipy.stats import fisher_exact

# 2.데이터 입력
data = np.array([[3,1],[1,3]])

# 3.피셔의 정확검정 통계량
oddsratio, pValue = fisher_exact(data, alternative = 'greater')
print("P-value: {0:.4f}".format(pValue))


""" 맥니마검정 """
# 1.library 선언
from statsmodels.stats.contingency_tables import mcnemar

# 2.데이터 입력
obs = [[510,16], [5,90]]

# 3.맥니마검정 통계량
result = mcnemar(obs)
print('statistic = %d, p-value = %.3f' % (result.statistic, result.pvalue))