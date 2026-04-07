import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { DollarSign, Download, TrendingUp, TrendingDown, Filter } from 'lucide-react';

export default function AdminPayments() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Payment Gateway & Finance</h1>
        </div>
        <Button variant="outline">
          <Download size={18} style={{ marginRight: 8 }} /> Export Report
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Total Revenue (MTD)</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>$124,500</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)', fontSize: '0.875rem', fontWeight: '500' }}>
                <TrendingUp size={16}/> +12.5% from last month
            </div>
        </Card>
        <Card>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Pending Dues</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>$45,200</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-danger)', fontSize: '0.875rem', fontWeight: '500' }}>
                <TrendingDown size={16}/> Action required for 32 accounts
            </div>
        </Card>
        <Card>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Successful Transactions</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1,245</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-success)', fontSize: '0.875rem', fontWeight: '500' }}>
                <TrendingUp size={16}/> 98% success rate
            </div>
        </Card>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)' }}>
            <h3 style={{ margin: 0 }}>Recent Transactions</h3>
            <Button variant="outline" size="sm"><Filter size={16} style={{ marginRight: 8 }}/> Filter Records</Button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
            <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Transaction ID</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Student / Family</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Amount</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Status</th>
            </tr>
            </thead>
            <tbody>
            {[
                { id: 'TRX-99381', name: 'Alex Johnson', date: 'Oct 24, 2026', amount: '$2,450.00', status: 'Completed' },
                { id: 'TRX-99382', name: 'Mia Johnson', date: 'Oct 23, 2026', amount: '$2,100.00', status: 'Completed' },
                { id: 'TRX-99383', name: 'Emily Davis', date: 'Oct 23, 2026', amount: '$450.00', status: 'Failed' },
                { id: 'TRX-99384', name: 'Michael Smith', date: 'Oct 22, 2026', amount: '$2,450.00', status: 'Pending' },
            ].map((tx, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>{tx.id}</td>
                <td style={{ padding: '1.5rem', fontWeight: '500' }}>{tx.name}</td>
                <td style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>{tx.date}</td>
                <td style={{ padding: '1.5rem', fontWeight: '600' }}>{tx.amount}</td>
                <td style={{ padding: '1.5rem' }}>
                    <span style={{ 
                    padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '600',
                    background: tx.status === 'Completed' ? 'var(--color-success)20' : (tx.status === 'Pending' ? 'var(--color-warning)20' : 'var(--color-danger)20'),
                    color: tx.status === 'Completed' ? 'var(--color-success)' : (tx.status === 'Pending' ? 'var(--color-warning)' : 'var(--color-danger)'),
                    }}>
                    {tx.status}
                    </span>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </Card>
    </div>
  );
}
