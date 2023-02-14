import { tmpdir } from 'os';
import path, { join } from 'path';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
} from 'fs';

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
  conn.reply(m.chat, '*[ ✔ ] Files from tmp folder successfully removed!!*', m);
  const tmp = [tmpdir(), join(__dirname, '../tmp')];
  const filename = [];
  tmp.forEach((dirname) =>
    readdirSync(dirname).forEach((file) => {
      const filePath = join(dirname, file);
      if (existsSync(filePath) && statSync(filePath).isFile()) {
        filename.push(filePath);
      }
    })
  );
  filename.forEach((file) => {
    unlinkSync(file);
  });
};

handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^(cleartmp|cleartemp)$/i;
handler.rowner = true;

export default handler;
