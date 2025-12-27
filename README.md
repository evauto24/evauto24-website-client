# React + TypeScript + Vite

src/
├── domain/
│ ├── models/ # Core business entities (e.g., User, Product)
│ └── services/ # Domain-specific business logic (e.g., UserService)
├── application/
│ └── usecases/ # Application-specific use cases (e.g., CreateUser, GetProductDetails)
├── infrastructure/
│ ├── api/ # API integrations (e.g., Axios client, API calls)
│ └── repositories/ # Data access implementations (e.g., UserRepository)
├── interfaces/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Top-level page components (containers)
│ └── store/ # State management (e.g., Redux, Zustand store setup)
├── shared/ # Common utilities, hooks, or assets
│ ├── assets/
│ ├── hooks/
│ └── utils/
├── App.jsx # Main application entry point
└── main.jsx # Root rendering setup
