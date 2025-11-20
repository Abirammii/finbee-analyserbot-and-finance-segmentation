# Financial-Behavior-Segmentation-and-Advisory-Bot  
## Project Title: Financial Behavior Segmentation and AI-Driven Investment Advisory System  

### PROJECT OVERVIEW  

- In this project scenario, I am envisioning the role of a data scientist employed by a bank, where I analyzed a Kaggle dataset containing detailed customer information and financial behavior patterns.  
- The dataset provides comprehensive insights into customer-level attributes such as ```Age```, ```Gender```, ```Education```, ```Marital Status```, ```Income Range```, ```Card Type```, ```Tenure```, ```Credit Limit```, ```Transaction Behavior```, and ```Utilization Rate```.  
- The main objective of this project was to identify distinct financial behavior segments among customers using exploratory data analysis (EDA), feature engineering, and Advanced clustering techniques.   
- As an extension of this analysis, I developed an  financial analyzer  web app called <span style="color:#4b8bff">
  <a href="https://abirammii.github.io/finbee-analyserbot-and-finance-segmentation/" target="_blank">FINBEE</a>
</span>
 
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
I'll commence by addressing the dataset's cleanliness. This involves identifying and managing null values, addressing outliers, and ensuring the consistency of the data.

#### A) Describing the Data
```df.describe().T```
<img width="958" height="445" alt="image" src="https://github.com/user-attachments/assets/0478d950-7932-41eb-85ff-e6e7581ac847" />

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
#### B) Checking for Missing Values
```
# Check percentage of missing values
(df.isnull().mean() * 100).round(2)
```
<img width="243" height="401" alt="image" src="https://github.com/user-attachments/assets/465ac981-1ce1-44f0-904f-393a67c7bda1" />

#### C) Checking for outliers
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
#### Outliers Removal
<img width="351" height="77" alt="image" src="https://github.com/user-attachments/assets/0f4f89eb-7e52-4199-883a-4f5a268dc93e" />

#### C) Conversion & Imputation
NaNs per important column:
```
TotalTransactionCount     0
TotalTransactionAmount    0
Credit_Limit              0
dtype: int64
```
cleaning my dataset by converting non-numeric text into real numeric values and checking for missing values caused by that conversion.

### 2. Data Visualization
#### A) Countplot Representation of Categorical feature
<Figure size 1000x1250 with 5 Axes><img width="964" height="1214" alt="image" src="https://github.com/user-attachments/assets/8d8b6786-4d51-48e1-b0da-24f31716231d" />
  
**Insights**

- Most customers are married and well-educated.
- Middle-income group forms the largest portion.
- Blue card is the most commonly used card type.
- The dataset shows a balanced gender distribution.
- Customers are mainly from a financially stable background.
- Higher education levels correlate with higher income groups.
- Premium cards (Gold, Platinum) are used by fewer customers.
- The data indicates a target audience of working professionals.
- Card preference appears linked to income category.
- The dataset reflects diverse but slightly skewed demographics toward middle-income, educated individuals.

#### B) Histogram representation of Numeric feature
<Figure size 1500x1000 with 12 Axes><img width="1223" height="913" alt="image" src="https://github.com/user-attachments/assets/c219965c-56e2-4448-9ba4-d4e50c8600be" />

  
**Insights**

- The age distribution shows that most customers are between 35–55 years, representing the prime working-age group.
- Dependents are mostly between 1–3, suggesting customers tend to have small family sizes.
- Tenure is centered around 35–40 months, showing stable, long-term customer relationships.
- Inactive months and contact frequency are generally low, indicating limited customer engagement in recent periods.
- Credit limit shows a right-skewed distribution, with most customers having lower credit limits and a few with very high ones.
- Total revolving balance and average utilization also show right skewness, implying most users maintain low outstanding balances.
- Total transaction amount and count suggest that moderate to high transaction activity is common among customers.
- Transaction change ratio is concentrated below 1, showing consistent transaction patterns with few high fluctuations.
- The relationship count distribution indicates that most customers hold 3–4 active relationships with the bank.
- Overall, numerical distributions highlight a customer base that is financially active, moderately engaged, and skewed toward conservative spending and credit usage.

#### C) Heatmap (Correlation Analysis)
```
plt.figure(figsize=(20,8))
sns.heatmap(df.corr(numeric_only=True), cmap="coolwarm", annot=True)
plt.title("Correlation Heatmap")
plt.show()
```
<Figure size 2000x800 with 2 Axes><img width="1570" height="821" alt="image" src="https://github.com/user-attachments/assets/74eaa7d1-8611-48b4-9e57-26cb6730c9cc" />

**Insights**
- Age and Tenure show a strong positive correlation (0.79), meaning older customers usually have longer relationships with the bank.
- Total Transaction Amount and Transaction Count are highly correlated (0.81), indicating frequent transactions lead to higher spending.
- Credit Limit and Avg Utilization are negatively correlated, showing customers with higher credit limits use a smaller portion of it.
- Total Revolving Balance and Avg Utilization have a positive correlation, suggesting higher balances increase utilization.
- Most other variables show weak correlations, indicating minimal multicollinearity in the dataset.

### FEATURE ENGINEERING
```
# Utilization-based Features
df['new_CreditUsage_Ratio'] = df['Total_Revolving_Bal'] / (df['Credit_Limit'] + 1)
df['new_Revolving_to_Available'] = df['Total_Revolving_Bal'] / (df['AvgUtilization'] + 1)

# Transaction-based Features
df['new_Avg_Transaction_Value'] = df['TotalTransactionAmount'] / (df['TotalTransactionCount'] + 1)
df['new_Transaction_Efficiency'] = df['TotalTransactionCount'] / (df['Tenure'] + 1)
df['new_Activity_Level'] = df['TotalTransactionAmount'] / (df['Tenure'] + 1)

#  Behavior-based Ratios
df['new_Inactive_to_Tenure'] = df['InactiveMonths'] / (df['Tenure'] + 1)
df['new_Contacts_per_Tenure'] = df['ContactsLast12M'] / (df['Tenure'] + 1)
df['new_Dependents_to_Relationship'] = df['Dependents'] / (df['RelationshipCount'] + 1)

# Change Indicators
df['new_TransactionChange_Effect'] = df['TransactionChangeRatio'] * df['TotalTransactionCount']
df['new_Spending_Change'] = df['TransactionChangeRatio'] * df['TotalTransactionAmount']

#  Financial Strength Indicators
df['new_Credit_to_Transaction'] = df['Credit_Limit'] / (df['TotalTransactionAmount'] + 1)
df['new_Balance_to_Transaction'] = df['Total_Revolving_Bal'] / (df['TotalTransactionAmount'] + 1)
```
**After checking Missing Values, now indexing custimer_ID feature**

```
if 'Customer_ID' in df.columns:
    df.set_index('Customer_ID', inplace=True)
df.head()
```
<div>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Gender</th>
      <th>Dependents</th>
      <th>Education</th>
      <th>MaritalStatus</th>
      <th>Income</th>
      <th>CardType</th>
      <th>Tenure</th>
      <th>RelationshipCount</th>
      <th>InactiveMonths</th>
      <th>...</th>
      <th>new_Avg_Transaction_Value</th>
      <th>new_Transaction_Efficiency</th>
      <th>new_Activity_Level</th>
      <th>new_Inactive_to_Tenure</th>
      <th>new_Contacts_per_Tenure</th>
      <th>new_Dependents_to_Relationship</th>
      <th>new_TransactionChange_Effect</th>
      <th>new_Spending_Change</th>
      <th>new_Credit_to_Transaction</th>
      <th>new_Balance_to_Transaction</th>
    </tr>
    <tr>
      <th>Customer_ID</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>768805383</th>
      <td>45</td>
      <td>M</td>
      <td>3</td>
      <td>High School</td>
      <td>Married</td>
      <td>$60K - $80K</td>
      <td>Blue</td>
      <td>39</td>
      <td>5</td>
      <td>1</td>
      <td>...</td>
      <td>26.604651</td>
      <td>1.050000</td>
      <td>28.600000</td>
      <td>0.025000</td>
      <td>0.075000</td>
      <td>0.500000</td>
      <td>68.250</td>
      <td>1859.000</td>
      <td>11.083843</td>
      <td>0.678603</td>
    </tr>
    <tr>
      <th>818770008</th>
      <td>49</td>
      <td>F</td>
      <td>5</td>
      <td>Graduate</td>
      <td>Single</td>
      <td>Less than $40K</td>
      <td>Blue</td>
      <td>44</td>
      <td>6</td>
      <td>1</td>
      <td>...</td>
      <td>37.970588</td>
      <td>0.733333</td>
      <td>28.688889</td>
      <td>0.022222</td>
      <td>0.044444</td>
      <td>0.714286</td>
      <td>122.562</td>
      <td>4794.774</td>
      <td>6.390093</td>
      <td>0.668731</td>
    </tr>
    <tr>
      <th>713982108</th>
      <td>51</td>
      <td>M</td>
      <td>3</td>
      <td>Graduate</td>
      <td>Married</td>
      <td>$80K - $120K</td>
      <td>Blue</td>
      <td>36</td>
      <td>4</td>
      <td>1</td>
      <td>...</td>
      <td>89.857143</td>
      <td>0.540541</td>
      <td>51.000000</td>
      <td>0.027027</td>
      <td>0.000000</td>
      <td>0.600000</td>
      <td>46.660</td>
      <td>4402.371</td>
      <td>1.810381</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>769911858</th>
      <td>40</td>
      <td>F</td>
      <td>4</td>
      <td>High School</td>
      <td>Unknown</td>
      <td>Less than $40K</td>
      <td>Blue</td>
      <td>34</td>
      <td>3</td>
      <td>4</td>
      <td>...</td>
      <td>55.761905</td>
      <td>0.571429</td>
      <td>33.457143</td>
      <td>0.114286</td>
      <td>0.028571</td>
      <td>1.000000</td>
      <td>46.660</td>
      <td>2731.943</td>
      <td>2.826792</td>
      <td>2.147611</td>
    </tr>
    <tr>
      <th>709106358</th>
      <td>40</td>
      <td>M</td>
      <td>3</td>
      <td>Uneducated</td>
      <td>Married</td>
      <td>$60K - $80K</td>
      <td>Blue</td>
      <td>21</td>
      <td>5</td>
      <td>1</td>
      <td>...</td>
      <td>28.137931</td>
      <td>1.272727</td>
      <td>37.090909</td>
      <td>0.045455</td>
      <td>0.000000</td>
      <td>0.500000</td>
      <td>70.000</td>
      <td>2040.000</td>
      <td>5.772338</td>
      <td>0.000000</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 32 columns</p>
</div>

```# Function to calculate outlier thresholds for a given variable
def outlier_thresholds(dataframe, variable):
    quartile1 = dataframe[variable].quantile(0.25)
    quartile3 = dataframe[variable].quantile(0.75)
    interquartile_range = quartile3 - quartile1
    up_limit = quartile3 + 1.5 * interquartile_range
    low_limit = quartile1 - 1.5 * interquartile_range
    return low_limit, up_limit
# Function to cap outliers at threshold limits
def replace_with_thresholds(dataframe, variable):
    low_limit, up_limit = outlier_thresholds(dataframe, variable)
    dataframe.loc[dataframe[variable] < low_limit, variable] = low_limit
    dataframe.loc[dataframe[variable] > up_limit, variable] = up_limit
# Applying outlier capping to all numerical columns
for col in df.select_dtypes(include=["float64", "int64"]).columns:
    replace_with_thresholds(df, col)
```

```
plt.figure(figsize=(12,6))
sns.boxplot(data=df)
plt.xticks(rotation=90)
plt.show()
```

<Figure size 1200x600 with 1 Axes><img width="1003" height="729" alt="image" src="https://github.com/user-attachments/assets/1ff10b79-f63a-46d9-9e50-1bec1883e076" />


## CLUSTERING TECHNIQUES
### 1.Hierarchial Clustering 
#### A) Dendrogram
```
linked = linkage(X_scaled, method='ward')
plt.figure(figsize=(12, 6))
dendrogram(linked,
           truncate_mode='level',   # Shows cleaner tree
           p=5)                     # Number of levels to show 
plt.title('Hierarchical Clustering Dendrogram')
plt.xlabel('Samples')
plt.ylabel('Distance')
plt.show()
```
<Figure size 1200x600 with 1 Axes><img width="1009" height="566" alt="image" src="https://github.com/user-attachments/assets/10c20b04-0501-4080-8709-6f1da068a749" />
  
#### B) Silhouette Score
<img width="298" height="292" alt="image" src="https://github.com/user-attachments/assets/aac0dddb-e89f-4f92-9238-53fb96c5a40f" />

**Insights** 
Therefore, we see the optimal number of clusters for this particular dataset would be 3 or 5. Let us now build and visualize the clustering model for k = 5.
#### c) Visualization
<Figure size 1000x700 with 1 Axes><img width="848" height="629" alt="image" src="https://github.com/user-attachments/assets/7d8c5795-846d-40e2-8168-029f85166c11" />

### 2. KMeans Clustering
#### A) Silhouette Score Method
<img width="294" height="188" alt="image" src="https://github.com/user-attachments/assets/753c1a95-7a04-4a2d-b3cb-3b1f9f2cc857" />

##### Silhouette Graph

<Figure size 800x500 with 1 Axes><img width="712" height="475" alt="image" src="https://github.com/user-attachments/assets/a1d0d2ca-0260-446d-8032-e5444068436c" />
  
**Insights**
Therefore, we see the optimal number of clusters for this particular dataset would be 3 or 4. Let us now build and visualize the clustering model for k =3.
#### B) Visualization
<Figure size 800x600 with 1 Axes><img width="693" height="552" alt="image" src="https://github.com/user-attachments/assets/b2974c30-00c5-4695-b64c-09889faadc0a" />

## 5. Cluster Performance
### A) Hierarchial Performance
<img width="290" height="100" alt="image" src="https://github.com/user-attachments/assets/ebe92762-4108-4b98-a29c-5cd83af0ea6c" />

### B) K-Means Performance
<img width="292" height="95" alt="image" src="https://github.com/user-attachments/assets/e3ab92e8-0f0a-4d0b-9be4-17a6b0286627" />

## 6. Cluster comparison
```
results = {
    'Model': ['K-Means', 'Hierarchical'],
    'Optimal k': [3, 5],
    'Silhouette Score': [sil_kmeans, sil_hier],
    'Calinski-Harabasz Score': [ch_kmeans, ch_hier],
    'Davies-Bouldin Score': [db_kmeans, db_hier]
}
comparison_df = pd.DataFrame(results)
print(comparison_df)
```

<img width="550" height="143" alt="image" src="https://github.com/user-attachments/assets/5245d863-5ed1-4ad4-a0be-58f143efc42e" />

### Model Comparison Summary

- K-Means provided better customer segmentation results compared to Hierarchical Clustering. After preprocessing and PCA, K-Means demonstrated:

1. Higher Silhouette Score
2. Higher Calinski–Harabasz Score
3. Lower Davies–Bouldin Score
  
- This indicates that K-Means produced **more compact, better-separated, and more meaningful clusters**, while Hierarchical clustering showed higher overlap between groups and weaker structure. Therefore, **K-Means was selected as the final model**, as it generated clearer and more actionable customer segments suitable for real-world financial analysis and recommendation systems.






