# Nexara Backend API

A Node.js backend server for the Nexara project management platform.

## 🚀 Quick Start (5 minutes)

### What you need:
- **Node.js** (version 18 or higher) - JavaScript runtime
- **PostgreSQL** (version 13 or higher) - Database
- **npm** (version 8 or higher) - Package manager

### Step-by-step setup:

```bash
# 1. Go to the backend folder
cd backend

# 2. Install required packages
npm install

# 3. Create environment file (copy from example)
cp .env.example .env

# 4. Set up your database
npm run db:generate    # Creates database client
npm run db:migrate     # Creates database tables
npm run db:seed        # Adds sample data

# 5. Start the server
npm run dev
```

**That's it!** Your server will run on `http://localhost:5000`

## 🔧 Configuration

### Environment Variables (.env file)

```env
# Server runs on this port
PORT=5000

# Database connection (PostgreSQL)
DATABASE_URL=postgresql://username:password@localhost:5432/nexara

# Security keys
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=8h

# Frontend URL (for CORS)
CORS_ORIGIN="http://localhost:3000"
```

**Important:** Replace `username`, `password`, and `your-secret-key-here` with your actual values.

## 📡 API Endpoints

### Health Check
- **GET** `/health` - Check if server is running

### User Authentication
- **POST** `/api/auth/register` - Create new user account
- **POST** `/api/auth/login` - Login user
- **POST** `/api/auth/logout` - Logout user

### Project Management
- **GET** `/api/project` - Get all projects
- **POST** `/api/project` - Create new project
- **GET** `/api/project/:id` - Get specific project
- **PUT** `/api/project/:id` - Update project
- **DELETE** `/api/project/:id` - Delete project

### Leaderboard
- **GET** `/api/leaderboard` - Get user rankings

## 🗃️ Database

**PostgreSQL** is used to store data with these main tables:
- **users** - User accounts and login info
- **projects** - Project information
- **boards** - Project boards (like Kanban boards)
- **columns** - Board columns for organizing tasks

## 🏃‍♂️ Running the Server

### Development (with auto-restart)
```bash
npm run dev
```

### Production (for deployment)
```bash
npm start
```

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Format code automatically
npm run format

# Check if code is properly formatted
npm run format:check

# Database operations
npm run db:generate    # Update database client
npm run db:migrate     # Apply database changes
npm run db:seed        # Add sample data
```

## 🔐 Authentication (How it works)

1. **Register/Login** → Get a JWT token
2. **Use token** → Include in requests: `Authorization: Bearer <token>`
3. **Token expires** → Based on your `JWT_EXPIRES_IN` setting

## 🛡️ Security Features

- **CORS** - Controls which websites can access your API
- **JWT** - Secure user authentication tokens
- **bcrypt** - Encrypts passwords safely
- **Input validation** - Checks data before processing
- **Error handling** - Graceful error responses

## 📁 Project Structure

```
backend/
├── config/           # Settings and configuration
├── controllers/      # Handle API requests
├── middleware/       # Security and validation
├── prisma/          # Database setup and migrations
├── routes/          # API endpoint definitions
├── services/        # Business logic
├── utils/           # Helper functions
├── .env             # Your environment settings
└── server.js        # Main application file
```

## 🚨 Troubleshooting

### Server won't start?
- Check if port 5000 is available
- Verify your `.env` file exists and has correct values
- Make sure PostgreSQL is running

### Database errors?
- Check your `DATABASE_URL` in `.env`
- Ensure PostgreSQL is installed and running
- Run `npm run db:migrate` to create tables

### Authentication issues?
- Verify your `JWT_SECRET` is set in `.env`
- Check if token is included in request headers

## 🔄 Database Management

### Create new database changes
```bash
npx prisma migrate dev --name your_change_name
```

### Apply changes to production
```bash
npm run db:migrate
```

### Reset database (development only)
```bash
npx prisma migrate reset
```

## 🚀 Deployment

### For production deployment:

1. Set environment variables:
```bash
export DATABASE_URL="your-production-database-url"
export JWT_SECRET="your-production-secret"
export NODE_ENV="production"
```

2. Run database setup:
```bash
npm run db:migrate
```

3. Start server:
```bash
npm start
```

## 📊 Monitoring

- **Health check**: Visit `http://localhost:5000/health`
- **Logs**: Check console output for errors and info
- **Database**: Monitor PostgreSQL for connection issues

## 🤝 Contributing

1. Follow existing code style
2. Run `npm run format` before committing
3. Test your changes
4. Update documentation if needed

## 📝 Need Help?

- Check the troubleshooting section above
- Look at console logs for error messages
- Verify all environment variables are set correctly
- Ensure PostgreSQL is running and accessible

---

**Technical Stack:**
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Prisma** - Database toolkit
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
