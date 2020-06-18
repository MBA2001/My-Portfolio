import numpy as np
import pandas as pd
import statistics
from scipy.stats import variation
data = input().split(' ')
pdata = pd.array(data)
data = np.sort(np.array(data))
print(data)
print('cooff: ', variation(data, axis=0))
print('standard dev: ',pdata.std())
print('variance: ', data.var())
print('mean: ', pdata.mean())
print('median: ', pdata.median())
print('range: ', data[len(data) -1] - data[0])
print('quartiles 25%: ', np.percentile(data, q=25))
print('quartiles 50%: ', np.percentile(data, q=50))
print('quartiles 75%: ', np.percentile(data, q=75))
print('quartiles 100%: ', np.percentile(data, q=100))
print('mode: ', statistics.mode(data))

