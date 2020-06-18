import matplotlib as mp
import pandas as pd
import numpy as np
import tensorflow as tf
import sklearn
from sklearn import linear_model

data  = pd.read_csv('student-por.csv', sep=';')

data = data[['G1', 'G2', 'G3', 'studytime' ,'absences', 'failures']]

x = np.array(data.drop(['G3'],1))
y = np.array(data['G3'])

x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x,y,test_size = 0.1)

linear = linear_model.LinearRegression()

linear.fit(x_train,y_train)

acc = linear.score(x_test,y_test)

predictions = linear.predict(x_test)

for x in range (len(predictions)):
    print(predictions[x], y_test[x])