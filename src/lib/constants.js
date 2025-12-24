
// Theme Colors (dark red)
const THEME_COLORS = {
    primary: '#A83232',      // Dark brick red
    secondary: '#C04545',    // Medium red
    accent: '#D85858',       // Coral red
    success: '#22c55e',      // Green
    error: '#ef4444',        // Red
    warning: '#f59e0b',      // Amber
    info: '#3b82f6',         // Blue
    dim: '#666666'           // Gray shadow (visible on dark/light terminals)
};

const FLOWS = {
    aidlc: {
        name: 'AI-DLC',
        description: 'AI-Driven Development Life Cycle - Best for greenfield projects with AI-native development',
        path: 'aidlc'
    },
    agile: {
        name: 'Agile',
        description: 'Sprint-based Agile development - Best for iterative development with changing requirements',
        path: 'agile',
        disabled: true, // Not implemented yet
        message: '(Coming soon)'
    }
};

module.exports = {
    THEME_COLORS,
    FLOWS
};
