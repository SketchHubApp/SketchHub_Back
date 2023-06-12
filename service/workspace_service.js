const workspaceRepository = require('../repository/workspace_repository');

// 모든 작업 공간 가져오기
exports.getWorkspaces = async (id) => {
    try {
        // 모든 room id 조회
        return await workspaceRepository.readWorkspaces(id);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// 작업 공간 열기
exports.openWorkspace = async (id, roomId) => {
    try {
        return await workspaceRepository.openWorkspace(id, roomId);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// 작업 공간 생성
exports.createWorkspace = async (workspaceName, creator, collaborator) => {
    try {
        return await workspaceRepository.createWorkspace(workspaceName, creator, collaborator);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// 협업자 조회
exports.getCollaborators = async (userId, roomName) => {
    try {
        return await workspaceRepository.getCollaborators(userId, roomName);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// 작업 공간 탈퇴
exports.leaveWorkspace = async (userWorkspaceId) => {
    try {
        return await workspaceRepository.leaveWorkspace(userWorkspaceId);
    } catch (err) {
        console.error(err);
        throw err;
    }
}