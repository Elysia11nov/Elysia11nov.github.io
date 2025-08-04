// redeem-worker.js
// 用于处理积分兑换相关的计算任务，避免阻塞主线程

self.onmessage = function(e) {
    const { totalPoints, prizePoints } = e.data;
    
    try {
        // 模拟一些复杂计算
        let result = {
            canRedeem: false,
            message: ''
        };
        
        // 检查积分是否足够
        if (totalPoints >= prizePoints) {
            result.canRedeem = true;
            result.message = '可以兑换';
        } else {
            result.canRedeem = false;
            result.message = '积分不足，无法兑换';
        }
        
        // 返回结果
        self.postMessage(result);
    } catch (error) {
        self.postMessage({
            canRedeem: false,
            message: error.message
        });
    }
};
