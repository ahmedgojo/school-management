import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { CreditCard, Download, DollarSign, Filter } from 'lucide-react';

export default function ParentFees() {
  const transactions = [
    { date: 'Sep 01, 2026', desc: 'Fall Semester Base Tuition - Alex', amount: '$2,450.00', status: 'Pending' },
    { date: 'Sep 01, 2026', desc: 'Fall Semester Base Tuition - Mia', amount: '$2,100.00', status: 'Pending' },
    { date: 'Aug 15, 2026', desc: 'Bus Transportation (Annual)', amount: '$600.00', status: 'Paid' },
    { date: 'Aug 10, 2026', desc: 'Library Fine - Alex', amount: '$15.00', status: 'Paid' },
    { date: 'Jul 20, 2026', desc: 'Registration Fee 2026-2027', amount: '$150.00', status: 'Paid' },
  ];

  const totalDue = "$4,550.00";

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Fees & Payments</h1>
        <Button variant="outline">
          <Download size={18} style={{ marginRight: 8 }} /> Download Statement
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* Payment Summary */}
        <Card style={{ background: 'var(--color-primary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.9, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px' }}>
                  <DollarSign size={18} /> Total Outstanding Balance
              </div>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  {totalDue}
              </div>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Your fall semester tuition payments are due by October 30, 2026. Avoid late fees by paying early.
              </p>
          </div>
          <div style={{ marginTop: '2rem' }}>
              <Button variant="outline" style={{ background: 'white', color: 'var(--color-primary)', border: 'none', width: '100%' }}>
                  Make a Payment
              </Button>
          </div>
        </Card>

        {/* Saved Payment Methods */}
        <Card>
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CreditCard size={20} color="var(--color-primary)" /> Payment Methods
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '24px', background: '#1A1F71', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', right: '-5px', bottom: '-5px', width: '20px', height: '20px', borderRadius: '50%', background: '#F79E1B' }}></div>
                            <div style={{ position: 'absolute', right: '5px', bottom: '-5px', width: '20px', height: '20px', borderRadius: '50%', background: '#EB001B', blendMode: 'multiply' }}></div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '500' }}>Mastercard ending in 4092</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Expires 12/28</div>
                        </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                </div>

                <button style={{ padding: '1.5rem', border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)', background: 'transparent', color: 'var(--color-primary)', fontWeight: '500', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    + Add New Payment Method
                </button>
            </div>
        </Card>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)' }}>
            <h3 style={{ margin: 0 }}>Transaction History</h3>
            <Button variant="outline" size="sm"><Filter size={16} style={{ marginRight: 8 }}/> Filter</Button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Description</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Amount</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1.5rem' }}>{tx.date}</td>
                  <td style={{ padding: '1.5rem', fontWeight: '500' }}>{tx.desc}</td>
                  <td style={{ padding: '1.5rem', fontWeight: '600' }}>{tx.amount}</td>
                  <td style={{ padding: '1.5rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '600',
                      background: tx.status === 'Paid' ? 'var(--color-success)20' : 'var(--color-warning)20',
                      color: tx.status === 'Paid' ? 'var(--color-success)' : 'var(--color-warning)',
                    }}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
