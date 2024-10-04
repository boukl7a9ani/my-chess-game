let players = [];
let currentPlayer = null;

function startGame() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        currentPlayer = { name: username, points: 0, badges: [] };
        players.push(currentPlayer);
        document.getElementById('login').style.display = 'none';
        document.getElementById('gameOptions').style.display = 'block';
    }
}

function chooseLevel() {
    document.getElementById('gameOptions').style.display = 'none';
    document.getElementById('levelOptions').style.display = 'block';
}

function startLearning(level) {
    alert(`Starting ${level} level lesson`);
    currentPlayer.points += level === 'beginner' ? 10 : level === 'intermediate' ? 20 : 30;
    checkAchievements();
    document.getElementById('levelOptions').style.display = 'none';
    document.getElementById('gameOptions').style.display = 'block';
}

function practiceScenario() {
    alert('Starting a practice scenario');
    currentPlayer.points += 15; // Points for completing a scenario
    checkAchievements();
}

function chessPuzzles() {
    alert('Solve this puzzle: Find checkmate in one move');
    currentPlayer.points += 5; // Points for solving puzzles
    checkAchievements();
}

function playAgainstAI() {
    document.getElementById('gameOptions').style.display = 'none';
    document.getElementById('chessBoard').style.display = 'block';
    const board = Chessboard('board', 'start');
    const game = new Chess();
}

function endGame() {
    document.getElementById('chessBoard').style.display = 'none';
    document.getElementById('gameOptions').style.display = 'block';
}

function showLeaderboard() {
    let leaderboardContent = '';
    players.sort((a, b) => b.points - a.points);
    players.forEach(player => {
        leaderboardContent += `<p>${player.name}: ${player.points} points</p>`;
    });
    document.getElementById('leaderboardContent').innerHTML = leaderboardContent;
    document.getElementById('leaderboard').style.display = 'block';
}

function closeLeaderboard() {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('gameOptions').style.display = 'block';
}

function teacherDashboard() {
    let dashboardContent = '';
    players.forEach(player => {
        dashboardContent += `<p>${player.name}: ${player.points} points, Badges: ${player.badges.join(', ')}</p>`;
    });
    document.getElementById('dashboardContent').innerHTML = dashboardContent;
    document.getElementById('teacherDashboard').style.display = 'block';
}

function closeTeacherDashboard() {
    document.getElementById('teacherDashboard').style.display = 'none';
    document.getElementById('gameOptions').style.display = 'block';
}

function assignBadge(badge) {
    alert(`Congratulations! You've earned the badge: ${badge}`);
    currentPlayer.badges.push(badge);
}

function checkAchievements() {
    if (currentPlayer.points >= 100 && !currentPlayer.badges.includes("Chess Beginner")) {
        assignBadge("Chess Beginner");
    }
    if (currentPlayer.points >= 200 && !currentPlayer.badges.includes("Intermediate Chess Master")) {
        assignBadge("Intermediate Chess Master");
    }
}