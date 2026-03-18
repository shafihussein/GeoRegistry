import 'dotenv/config.js';
import pool from './database.js';

async function testDbConnection() {
  try {
    const result = await pool.query('SELECT NOW() AS current_time');
    console.log('✓ DB connected:', result.rows[0]);
  } catch (error) {
    console.error('✗ DB connection failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testDbConnection();