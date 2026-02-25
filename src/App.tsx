import { AppRouter } from './app/providers/router'
import { ErrorBoundary} from "@/widgets/ErrorBoundary/ErrorBoundary";
import { ErrorFallback } from "@/widgets/ErrorBoundary/ui/ErrorFallback";

import '@/shared/styles/globals.css';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
     <AppRouter />
    </ErrorBoundary>
     
  )
}

export default App
