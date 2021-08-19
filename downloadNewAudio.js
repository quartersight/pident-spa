function main(bucketName = 'wp-sl-pident') {
    const { Storage } = require('@google-cloud/storage');
    const path = require('path');
    const cwd = path.join(__dirname);
    const remoteFileList = [];
    const storage = new Storage({projectId: "bbc-east-pident-audio"});
    async function listFiles() {
        const [files] = await storage.bucket(bucketName).getFiles();
        files.forEach(file => {
            remoteFileList.push(file.name);
        });
    }
    async function downloadFile(srcFilename) {
        const options = {
            destination: path.join(cwd, "public/audio" ,srcFilename),
        };
        await storage.bucket(bucketName).file(srcFilename).download(options);
        console.log(
            "The ident " + srcFilename + " has been downloaded to /public/audio" + srcFilename
        );
    }
    listFiles().catch(console.error).then(() => {
        remoteFileList.forEach(filename => {
            downloadFile(filename).catch(console.error);
    })
    });
}
main(...process.argv.slice(2));
