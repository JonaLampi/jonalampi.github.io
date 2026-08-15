// Global array to hold all table captains
const TABLECAPTAIN = [];

// Change this list to choose which table captains appear in the homepage preview.
const FEATURED_TABLE_CAPTAINS = ['christiana_bukalo', 'kai_lanz', 'sabine_werth'];

// Helper function to get a person by ID (filename without .js)
function getTableCaptainById(id) {
    return TABLECAPTAIN.find(p => p.id === id);
}

// Helper to get all persons (for card generation)
function getAllTableCaptains() {
    return TABLECAPTAIN;
}

// Helper to get the featured persons for the homepage preview
function getFeaturedTableCaptains() {
    return FEATURED_TABLE_CAPTAINS
        .map(id => getTableCaptainById(id))
        .filter(Boolean);
}