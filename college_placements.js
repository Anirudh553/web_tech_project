import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, TrendingUp, DollarSign, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlacementsPage = () => {
  const [selectedTier, setSelectedTier] = useState('all');

  const placementStats = {
    highestPackage: "45 LPA",
    averagePackage: "12 LPA",
    medianPackage: "10.5 LPA",
    placedStudents: "92%",
    totalCompanies: "150+",
    totalOffers: "800+"
  };

  const companies = {
    tier1: [
      { name: "Google", avgPackage: "42 LPA", offers: 35, domain: "Software/Cloud" },
      { name: "Microsoft", avgPackage: "44 LPA", offers: 45, domain: "Software/Cloud" },
      { name: "Amazon", avgPackage: "40 LPA", offers: 42, domain: "E-commerce/Cloud" },
      { name: "Apple", avgPackage: "38 LPA", offers: 15, domain: "Software/Hardware" },
      { name: "Goldman Sachs", avgPackage: "35 LPA", offers: 38, domain: "Finance" },
      { name: "Morgan Stanley", avgPackage: "34 LPA", offers: 30, domain: "Finance" },
      { name: "Uber", avgPackage: "36 LPA", offers: 20, domain: "Software" },
      { name: "Netflix", avgPackage: "40 LPA", offers: 10, domain: "Streaming/Tech" }
    ],
    tier2: [
      { name: "Adobe", avgPackage: "25 LPA", offers: 25, domain: "Software" },
      { name: "Salesforce", avgPackage: "24 LPA", offers: 30, domain: "Cloud/CRM" },
      { name: "Qualcomm", avgPackage: "22 LPA", offers: 35, domain: "Hardware" },
      { name: "LinkedIn", avgPackage: "28 LPA", offers: 15, domain: "Social/Tech" },
      { name: "Samsung", avgPackage: "20 LPA", offers: 40, domain: "Electronics" },
      { name: "Oracle", avgPackage: "23 LPA", offers: 45, domain: "Database/Cloud" },
      { name: "VMWare", avgPackage: "21 LPA", offers: 30, domain: "Virtualization" },
      { name: "Cisco", avgPackage: "20 LPA", offers: 35, domain: "Networking" },
      { name: "Intel", avgPackage: "22 LPA", offers: 25, domain: "Hardware" },
      { name: "PayPal", avgPackage: "26 LPA", offers: 20, domain: "Fintech" }
    ],
    tier3: [
      { name: "Infosys", avgPackage: "8 LPA", offers: 120, domain: "IT Services" },
      { name: "TCS", avgPackage: "7.5 LPA", offers: 150, domain: "IT Services" },
      { name: "Wipro", avgPackage: "7 LPA", offers: 100, domain: "IT Services" },
      { name: "Cognizant", avgPackage: "8 LPA", offers: 90, domain: "IT Services" },
      { name: "Accenture", avgPackage: "8.5 LPA", offers: 95, domain: "Consulting" },
      { name: "HCL", avgPackage: "7 LPA", offers: 85, domain: "IT Services" },
      { name: "Capgemini", avgPackage: "7.2 LPA", offers: 80, domain: "IT Services" },
      { name: "Tech Mahindra", avgPackage: "6.8 LPA", offers: 75, domain: "IT Services" },
      { name: "Mindtree", avgPackage: "7.5 LPA", offers: 60, domain: "IT Services" },
      { name: "L&T Infotech", avgPackage: "7.8 LPA", offers: 70, domain: "IT Services" }
    ]
  };

  const sectors = [
    { name: "Information Technology", percentage: 45 },
    { name: "Finance & Banking", percentage: 20 },
    { name: "Consulting", percentage: 15 },
    { name: "Core Engineering", percentage: 10 },
    { name: "Analytics", percentage: 10 }
  ];

  const getTierColor = (tier) => {
    switch(tier) {
      case 'tier1': return 'bg-gradient-to-r from-yellow-500 to-yellow-300';
      case 'tier2': return 'bg-gradient-to-r from-gray-400 to-gray-300';
      case 'tier3': return 'bg-gradient-to-r from-amber-700 to-amber-600';
      default: return '';
    }
  };

  const getTierName = (tier) => {
    switch(tier) {
      case 'tier1': return 'Tier 1 (Dream)';
      case 'tier2': return 'Tier 2 (Core)';
      case 'tier3': return 'Tier 3 (Mass)';
      default: return '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Campus Placements</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our extensive placement records featuring top companies across various tiers and sectors.
        </p>
      </div>

      {/* Placement Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">Highest Package</p>
                <h3 className="text-2xl font-bold">{placementStats.highestPackage}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600">Average Package</p>
                <h3 className="text-2xl font-bold">{placementStats.averagePackage}</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Placement Rate</p>
                <h3 className="text-2xl font-bold">{placementStats.placedStudents}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Tiers */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Recruiting Companies
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button 
              onClick={() => setSelectedTier('all')}
              variant={selectedTier === 'all' ? 'default' : 'outline'}
            >
              All Tiers
            </Button>
            {['tier1', 'tier2', 'tier3'].map((tier) => (
              <Button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                variant={selectedTier === tier ? 'default' : 'outline'}
                className={`${selectedTier === tier ? getTierColor(tier) : ''}`}
              >
                {getTierName(tier)}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(companies).map(([tier, companyList]) => {
              if (selectedTier !== 'all' && tier !== selectedTier) return null;
              return companyList.map((company, index) => (
                <div 
                  key={`${tier}-${index}`} 
                  className={`p-4 rounded-lg ${getTierColor(tier)} text-black`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {company.domain}
                      </Badge>
                    </div>
                    <Badge variant="default" className="text-sm">
                      {getTierName(tier)}
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-medium">Avg: {company.avgPackage}</span>
                    <span className="text-sm">{company.offers} offers</span>
                  </div>
                </div>
              ));
            })}
          </div>
        </CardContent>
      </Card>

      {/* Sector-wise Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Sector-wise Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sectors.map((sector, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{sector.name}</span>
                  <span className="text-sm text-gray-600">{sector.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${sector.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlacementsPage;
