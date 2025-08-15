# Nexara Backend API

A robust Node.js backend API server for the Nexara project management platform, built with Express.js, Prisma ORM, and PostgreSQL.

## 🚀 Quick Start

```bash
# Clone and navigate to backend
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Setup database
npm run db:generate
npm run db:migrate
npm run db:seed

# Start development server
npm run dev
```

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **PostgreSQL** >= 13.0
- **npm** >= 8.0.0

## 🛠️ Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp .env.example .env
```

Update `.env` with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/nexara

# Authentication
JWT_SECRET=your-super-secure-jwt-secret-key-here-256-bits-minimum
JWT_EXPIRES_IN=8h
BCRYPT_SALT_ROUNDS=12
CORS_ORIGIN="http://localhost:3000"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database (optional)
npm run db:seed
```

## 🏃‍♂️ Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT).

## 📡 API Endpoints

### Health Check
- **GET** `/health` - Server health status

### Authentication
- **POST** `/api/auth/register` - User registration
- **POST** `/api/auth/login` - User login
- **POST** `/api/auth/logout` - User logout

### Projects
- **GET** `/api/project` - Get all projects
- **POST** `/api/project` - Create new project
- **GET** `/api/project/:id` - Get project by ID
- **PUT** `/api/project/:id` - Update project
- **DELETE** `/api/project/:id` - Delete project

### Leaderboard
- **GET** `/api/leaderboard` - Get leaderboard data

## 🗃️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models:

- **User** - User accounts and authentication
- **Project** - Project management
- **Board** - Project boards
- **Column** - Board columns for task organization

## 🧪 Development Scripts

```bash
# Start development server with auto-reload
npm run dev

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Generate Prisma client
npm run db:generate

# Deploy database migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed
```

## 🔧 Project Structure

```
backend/
├── config/           # Configuration files
│   ├── database.js   # Database connection
│   └── env.js        # Environment validation
├── controllers/      # Route controllers
├── middleware/       # Express middleware
├── prisma/          # Database schema and migrations
├── routes/          # API route definitions
├── services/        # Business logic layer
├── utils/           # Utility functions
├── .env.example     # Environment template
├── package.json     # Dependencies and scripts
└── server.js        # Application entry point
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. Register/login to receive a JWT token
2. Include token in Authorization header: `Bearer <token>`
3. Tokens expire based on `JWT_EXPIRES_IN` setting

## 🛡️ Security Features

- **CORS** protection
- **JWT** authentication
- **bcrypt** password hashing
- **Input validation** with Joi
- **Environment variable** validation
- **Error handling** middleware

## 🚨 Error Handling

The API includes comprehensive error handling:

- **Global error handler** for unhandled errors
- **404 handler** for unknown routes
- **Validation errors** for invalid input
- **Authentication errors** for unauthorized access

## 📊 Monitoring

### Health Check
Visit `http://localhost:5000/health` to verify server status.

### Logs
The server provides detailed console logging for:
- Server startup
- Database connections
- Request errors
- Graceful shutdown

## 🔄 Database Migrations

```bash
# Create new migration
npx prisma migrate dev --name migration_name

# Deploy migrations to production
npm run db:migrate

# Reset database (development only)
npx prisma migrate reset
```

## 🧹 Code Quality

The project includes:
- **Prettier** for code formatting
- **ESLint** for code linting
- **Husky** for pre-commit hooks
- **lint-staged** for staged file processing

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in production:
- `DATABASE_URL`
- `JWT_SECRET`
- `NODE_ENV=production`

### Database
Run migrations before starting the server:
```bash
npm run db:migrate
```

### Process Management
The server handles graceful shutdown on SIGTERM and SIGINT signals.

## 🤝 Contributing

1. Follow the existing code style
2. Run `npm run format` before committing
3. Ensure all tests pass
4. Update documentation for API changes

## 📝 License

This project is licensed under the MIT License.