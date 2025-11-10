# Financial-Behavior-Segmentation-and-Advisory-Bot  
## Project Title: Financial Behavior Segmentation and AI-Driven Investment Advisory System  

### PROJECT OVERVIEW  

- In this project scenario, I am envisioning the role of a data scientist employed by a bank, where I analyzed a Kaggle dataset containing detailed customer information and financial behavior patterns.  
- The dataset provides comprehensive insights into customer-level attributes such as ```Age```, ```Gender```, ```Education```, ```Marital Status```, ```Income Range```, ```Card Type```, ```Tenure```, ```Credit Limit```, ```Transaction Behavior```, and ```Utilization Rate```.  
- The main objective of this project was to identify distinct financial behavior segments among customers using **exploratory data analysis (EDA)**, **feature engineering**, and **clustering techniques**.  
- These insights enable the bank to develop **personalized marketing strategies**, optimize **customer retention**, and recommend **tailored financial products** for different customer groups.  
- As an extension of this analysis, I developed an AI-powered financial advisory web app called ```FinBee```.  
- ```FinBee``` acts as a Smart Finance Analyser Bot helping customers evaluate their financial habits based on factors like income, expenses, and savings, and providing instant personalized advice.  
- This integrated project demonstrates how data science, machine learning, and interactive web development (React) can work together to deliver data-driven financial intelligence for real-world banking use cases.

### MODULES OF THE PROJECT  

1. Exploratory Data Analysis (EDA)  
2. Feature Engineering & Selection  
3. Customer Segmentation (Clustering)  
4. Dimensionality Reduction (PCA & UMAP)  
5. Recommendation System (Segment Profiling)  
6. Smart Finance Advisory App (FinBee)

### DATASET DESCRIPTION  

The dataset, sourced from **Kaggle**, provides insights into the financial behavior and engagement patterns of bank customers.  It captures detailed information about customer demographics, credit activity, and account usage over time.  The data enables the identification of distinct customer segments based on their financial habits, supporting better decision-making and personalized financial recommendations.

### DATA DICTIONARY  

| Feature Name | Description |
|---------------|-------------|
| `Customer_ID` | Unique identifier assigned to each customer |
| `Age` | Age of the customer |
| `Gender` | Gender of the customer |
| `Dependents` | Number of dependents associated with the customer |
| `Education` | Education level of the customer |
| `MaritalStatus` | Marital status of the customer |
| `Income` | Monthly income of the customer |
| `CardType` | Type of credit or debit card owned by the customer |
| `Tenure` | Duration of the customer's relationship with the bank (in months or years) |
| `RelationshipCount` | Number of bank products associated with the customer |
| `InactiveMonths` | Number of months the customer remained inactive |
| `ContactsLast12M` | Number of contacts made with the customer in the last 12 months |
| `Credit_Limit` | Maximum credit limit assigned to the customer |
| `Total_Revolving_Bal` | Total outstanding balance that is carried forward each month |
| `Avg_Open_To_Buy` | Average remaining credit available to spend |
| `Total_Amt_Chng_Q4_Q1` | Change in transaction amount between Q4 and Q1 |
| `TotalTransactionAmount` | Total amount transacted by the customer |
| `TotalTransactionCount` | Total number of transactions made by the customer |
| `TransactionChangeRatio` | Ratio of transaction activity change over a given period |
| `AvgUtilization` | Average utilization rate of the customer’s credit limit |


### 1. DATA ANALYSIS
I'll commence by addressing the dataset's cleanliness.

#### A) Describing the Data
```df.describe().T```

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Customer_ID</th>
      <th>Age</th>
      <th>Dependents</th>
      <th>Tenure</th>
      <th>RelationshipCount</th>
      <th>InactiveMonths</th>
      <th>ContactsLast12M</th>
      <th>Credit_Limit</th>
      <th>Total_Revolving_Bal</th>
      <th>Avg_Open_To_Buy</th>
      <th>Total_Amt_Chng_Q4_Q1</th>
      <th>TotalTransactionAmount</th>
      <th>TotalTransactionCount</th>
      <th>TransactionChangeRatio</th>
      <th>AvgUtilization</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>1.012700e+04</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
      <td>10127.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>7.391776e+08</td>
      <td>46.325960</td>
      <td>2.346203</td>
      <td>35.928409</td>
      <td>3.812580</td>
      <td>2.341167</td>
      <td>2.455317</td>
      <td>8631.953698</td>
      <td>1162.814061</td>
      <td>7469.139637</td>
      <td>0.759941</td>
      <td>4404.086304</td>
      <td>64.858695</td>
      <td>0.712222</td>
      <td>0.274894</td>
    </tr>
    <tr>
      <th>std</th>
      <td>3.690378e+07</td>
      <td>8.016814</td>
      <td>1.298908</td>
      <td>7.986416</td>
      <td>1.554408</td>
      <td>1.010622</td>
      <td>1.106225</td>
      <td>9088.776650</td>
      <td>814.987335</td>
      <td>9090.685324</td>
      <td>0.219207</td>
      <td>3397.129254</td>
      <td>23.472570</td>
      <td>0.238086</td>
      <td>0.275691</td>
    </tr>
    <tr>
      <th>min</th>
      <td>7.080821e+08</td>
      <td>26.000000</td>
      <td>0.000000</td>
      <td>13.000000</td>
      <td>1.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
      <td>1438.300000</td>
      <td>0.000000</td>
      <td>3.000000</td>
      <td>0.000000</td>
      <td>510.000000</td>
      <td>10.000000</td>
      <td>0.000000</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>7.130368e+08</td>
      <td>41.000000</td>
      <td>1.000000</td>
      <td>31.000000</td>
      <td>3.000000</td>
      <td>2.000000</td>
      <td>2.000000</td>
      <td>2555.000000</td>
      <td>359.000000</td>
      <td>1324.500000</td>
      <td>0.631000</td>
      <td>2155.500000</td>
      <td>45.000000</td>
      <td>0.582000</td>
      <td>0.023000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>7.179264e+08</td>
      <td>46.000000</td>
      <td>2.000000</td>
      <td>36.000000</td>
      <td>4.000000</td>
      <td>2.000000</td>
      <td>2.000000</td>
      <td>4549.000000</td>
      <td>1276.000000</td>
      <td>3474.000000</td>
      <td>0.736000</td>
      <td>3899.000000</td>
      <td>67.000000</td>
      <td>0.702000</td>
      <td>0.176000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>7.731435e+08</td>
      <td>52.000000</td>
      <td>3.000000</td>
      <td>40.000000</td>
      <td>5.000000</td>
      <td>3.000000</td>
      <td>3.000000</td>
      <td>11067.500000</td>
      <td>1784.000000</td>
      <td>9859.000000</td>
      <td>0.859000</td>
      <td>4741.000000</td>
      <td>81.000000</td>
      <td>0.818000</td>
      <td>0.503000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>8.283431e+08</td>
      <td>73.000000</td>
      <td>5.000000</td>
      <td>56.000000</td>
      <td>6.000000</td>
      <td>6.000000</td>
      <td>6.000000</td>
      <td>34516.000000</td>
      <td>2517.000000</td>
      <td>34516.000000</td>
      <td>3.397000</td>
      <td>18484.000000</td>
      <td>139.000000</td>
      <td>3.714000</td>
      <td>0.999000</td>
    </tr>
  </tbody>
</table>
</div>

**Insights**
- The average customer age is 46 years, indicating a primarily middle-aged segment.
- Customers usually have 2–3 dependents, reflecting small family sizes.
- The average tenure is 36 months, showing stable, long-term relationships.
- The average credit limit is ₹8,600, with wide variation among customers.
- Revolving balance averages ₹1,163, suggesting moderate outstanding dues.
- Customers perform about 65 transactions per year with an average spend of ₹4,400.
- The credit utilization ratio averages 0.27, showing responsible credit usage.
- The transaction change ratio (0.71) indicates consistent spending habits.
- Most customers remain active, with only about 2 inactive months on average.
- The overall pattern supports financial segmentation into high, medium, and low spenders.

#### B) Checking for outliers
Using the Interquartile Range (IQR) method, the following approach was used to detect outliers:
- Calculate the first quartile (Q1) and third quartile (Q3) for each numerical feature.
- Compute the IQR = Q3 - Q1.
- Determine the lower bound as ```Q1 - 1.5 × IQR```.
- Determine the upper bound as ```Q3 + 1.5 × IQR```.
- Data points lying below the lower bound or above the upper bound are identified as outliers.

**Outlier Percentage by Feature:**
```
Outliers in "Age": 0.02%
Outliers in "Dependents": 0.0%
Outliers in "Tenure": 3.81%
Outliers in "RelationshipCount": 0.0%
Outliers in "InactiveMonths": 3.27%
Outliers in "ContactsLast12M": 6.21%
Outliers in "Credit_Limit": 9.72%
Outliers in "Total_Revolving_Bal": 0.0%
Outliers in "Avg_Open_To_Buy": 9.51%
Outliers in "Total_Amt_Chng_Q4_Q1": 3.91%
Outliers in "TotalTransactionAmount": 8.85%
Outliers in "TotalTransactionCount": 0.02%
Outliers in "TransactionChangeRatio": 3.89%
Outliers in "AvgUtilization": 0.0%
```
#### C) Conversion & Imputation
NaNs per important column:
```
TotalTransactionCount     0
TotalTransactionAmount    0
Credit_Limit              0
dtype: int64
```
cleaning my dataset by converting non-numeric text into real numeric values and checking for missing values caused by that conversion.
