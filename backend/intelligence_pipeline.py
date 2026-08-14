import pandas as pd
import numpy as np

def process_company_intelligence(filepath):
    """
    Simulates Preqin's Company Intelligence workflow: 
    Cleans unstructured records, handles ambiguity flags, and computes Profit Cube metrics.
    """
    try:
        df = pd.read_csv(filepath)
        
        # Data Quality & Ambiguity Resolution Audit
        df['data_confidence_score'] = np.where(df['disclosure_completeness'] == 'Low', 0.65, 0.95)
        df.dropna(subset=['company_name', 'reported_revenue'], inplace=True)
        
        # Profit Cube Calculation
        df['ebitda'] = df['reported_revenue'] - df['operating_costs']
        df['ebitda_margin'] = (df['ebitda'] / df['reported_revenue']) * 100
        
        intelligence_summary = df.groupby(['sector', 'region', 'customer_segment']).agg({
            'reported_revenue': 'sum',
            'ebitda': 'sum',
            'ebitda_margin': 'mean',
            'data_confidence_score': 'mean'
        }).reset_index()
        
        print("Intelligence pipeline executed successfully.")
        return intelligence_summary
    except Exception as e:
        print(f"Pipeline error encountered: {e}")
        return None

if __name__ == "__main__":
    print("Preqin Company Intelligence Engine Module Loaded.")