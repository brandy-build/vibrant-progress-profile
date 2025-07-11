
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Database, Server, Key, CheckCircle, AlertCircle } from 'lucide-react';

const DatabaseSetup = () => {
  const [activeTab, setActiveTab] = useState('supabase');
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle');

  const handleConnect = () => {
    setConnectionStatus('connecting');
    // Simulate connection attempt
    setTimeout(() => {
      setConnectionStatus('success');
    }, 2000);
  };

  const supabaseCode = `// Install Supabase client
npm install @supabase/supabase-js

// Create supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Example: Insert data
const { data, error } = await supabase
  .from('portfolio_contacts')
  .insert([
    { name: 'John Doe', email: 'john@example.com', message: 'Hello!' }
  ])

// Example: Fetch data
const { data, error } = await supabase
  .from('portfolio_projects')
  .select('*')
  .order('created_at', { ascending: false })`;

  const mongoCode = `// Install MongoDB driver
npm install mongodb

// Connect to MongoDB
import { MongoClient } from 'mongodb'

const uri = 'YOUR_MONGODB_CONNECTION_STRING'
const client = new MongoClient(uri)

async function connectDB() {
  try {
    await client.connect()
    const db = client.db('portfolio')
    return db
  } catch (error) {
    console.error('Connection failed:', error)
  }
}

// Example: Insert document
const db = await connectDB()
const result = await db.collection('contacts').insertOne({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!',
  timestamp: new Date()
})

// Example: Find documents
const projects = await db.collection('projects').find({}).toArray()`;

  const postgresCode = `// Install pg (PostgreSQL driver)
npm install pg @types/pg

// Create connection
import { Pool } from 'pg'

const pool = new Pool({
  host: 'YOUR_HOST',
  port: 5432,
  database: 'YOUR_DATABASE',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
})

// Example: Create table
await pool.query(\`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
\`)

// Example: Insert data
const result = await pool.query(
  'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
  ['John Doe', 'john@example.com', 'Hello!']
)

// Example: Select data
const { rows } = await pool.query('SELECT * FROM projects ORDER BY created_at DESC')`;

  return (
    <div className="min-h-screen bg-slate-900 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Database Setup
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose and configure your preferred database solution for the portfolio
          </p>
        </div>

        {/* Database Options */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 p-1 rounded-lg border border-slate-700 inline-flex">
            <button
              onClick={() => setActiveTab('supabase')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'supabase'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Database className="inline mr-2" size={18} />
              Supabase
            </button>
            <button
              onClick={() => setActiveTab('mongodb')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'mongodb'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Server className="inline mr-2" size={18} />
              MongoDB
            </button>
            <button
              onClick={() => setActiveTab('postgres')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'postgres'
                  ? 'bg-cyan-500 text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Key className="inline mr-2" size={18} />
              PostgreSQL
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                {activeTab === 'supabase' && <Database className="text-cyan-400" size={24} />}
                {activeTab === 'mongodb' && <Server className="text-cyan-400" size={24} />}
                {activeTab === 'postgres' && <Key className="text-cyan-400" size={24} />}
                
                {activeTab === 'supabase' && 'Supabase Configuration'}
                {activeTab === 'mongodb' && 'MongoDB Configuration'}
                {activeTab === 'postgres' && 'PostgreSQL Configuration'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeTab === 'supabase' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="supabase-url" className="text-slate-300">Supabase URL</Label>
                    <Input
                      id="supabase-url"
                      placeholder="https://your-project.supabase.co"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supabase-key" className="text-slate-300">Anon Key</Label>
                    <Input
                      id="supabase-key"
                      type="password"
                      placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                </>
              )}

              {activeTab === 'mongodb' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="mongo-url" className="text-slate-300">Connection String</Label>
                    <Input
                      id="mongo-url"
                      placeholder="mongodb+srv://username:password@cluster.mongodb.net/database"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mongo-db" className="text-slate-300">Database Name</Label>
                    <Input
                      id="mongo-db"
                      placeholder="portfolio"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                </>
              )}

              {activeTab === 'postgres' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pg-host" className="text-slate-300">Host</Label>
                      <Input
                        id="pg-host"
                        placeholder="localhost"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pg-port" className="text-slate-300">Port</Label>
                      <Input
                        id="pg-port"
                        placeholder="5432"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pg-database" className="text-slate-300">Database</Label>
                    <Input
                      id="pg-database"
                      placeholder="portfolio"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pg-user" className="text-slate-300">Username</Label>
                      <Input
                        id="pg-user"
                        placeholder="username"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pg-password" className="text-slate-300">Password</Label>
                      <Input
                        id="pg-password"
                        type="password"
                        placeholder="password"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                      />
                    </div>
                  </div>
                </>
              )}

              <Button 
                onClick={handleConnect}
                disabled={connectionStatus === 'connecting'}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
              >
                {connectionStatus === 'connecting' && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-slate-900 border-t-transparent mr-2" />
                )}
                {connectionStatus === 'success' && <CheckCircle className="mr-2" size={18} />}
                {connectionStatus === 'error' && <AlertCircle className="mr-2" size={18} />}
                
                {connectionStatus === 'idle' && 'Test Connection'}
                {connectionStatus === 'connecting' && 'Connecting...'}
                {connectionStatus === 'success' && 'Connected!'}
                {connectionStatus === 'error' && 'Connection Failed'}
              </Button>

              {connectionStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">
                    ✅ Database connection successful! You can now use this configuration in your portfolio.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Implementation Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600 overflow-hidden">
                <pre className="text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
                  <code>
                    {activeTab === 'supabase' && supabaseCode}
                    {activeTab === 'mongodb' && mongoCode}
                    {activeTab === 'postgres' && postgresCode}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400">
              📚 Documentation
            </Button>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400">
              🎥 Video Tutorials
            </Button>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400">
              💬 Community Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSetup;
