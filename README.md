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



<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Customer_ID</th>
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
      <th>0</th>
      <td>768805383</td>
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
      <td>3</td>
      <td>12691.0</td>
      <td>777</td>
      <td>11914.0</td>
      <td>1.335</td>
      <td>1144</td>
      <td>42</td>
      <td>1.625</td>
      <td>0.061</td>
    </tr>
    <tr>
      <th>1</th>
      <td>818770008</td>
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
      <td>2</td>
      <td>8256.0</td>
      <td>864</td>
      <td>7392.0</td>
      <td>1.541</td>
      <td>1291</td>
      <td>33</td>
      <td>3.714</td>
      <td>0.105</td>
    </tr>
    <tr>
      <th>2</th>
      <td>713982108</td>
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
      <td>0</td>
      <td>3418.0</td>
      <td>0</td>
      <td>3418.0</td>
      <td>2.594</td>
      <td>1887</td>
      <td>20</td>
      <td>2.333</td>
      <td>0.000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>769911858</td>
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
      <td>1</td>
      <td>3313.0</td>
      <td>2517</td>
      <td>796.0</td>
      <td>1.405</td>
      <td>1171</td>
      <td>20</td>
      <td>2.333</td>
      <td>0.760</td>
    </tr>
    <tr>
      <th>4</th>
      <td>709106358</td>
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
      <td>0</td>
      <td>4716.0</td>
      <td>0</td>
      <td>4716.0</td>
      <td>2.175</td>
      <td>816</td>
      <td>28</td>
      <td>2.500</td>
      <td>0.000</td>
    </tr>
  </tbody>
</table>
</div>
