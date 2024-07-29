use ciet
var stats = db.stats()
print("Database Size: " + (stats.dataSize / (1024 * 1024 * 1024)).toFixed(2) + " GB");
print("Storage Size: " + (stats.storageSize / (1024 * 1024 * 1024)).toFixed(2) + " GB");