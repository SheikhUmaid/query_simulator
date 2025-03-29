export const parseQuery = (question) => {
    let pseudoSQL = "UNKNOWN";

    const lowerCaseQuery = question.toLowerCase();
    
    if (lowerCaseQuery.includes("total sales in march")) {
        pseudoSQL = "SELECT SUM(amount) FROM sales WHERE month='March';";
    } else if (lowerCaseQuery.includes("active users")) {
        pseudoSQL = "SELECT COUNT(*) FROM users WHERE status='active';";
    } else if (lowerCaseQuery.includes("most sold product")) {
        pseudoSQL = "SELECT product_name, COUNT(*) FROM orders GROUP BY product_name ORDER BY COUNT(*) DESC LIMIT 1;";
    }

    return pseudoSQL;
};
