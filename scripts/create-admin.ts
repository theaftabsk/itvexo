import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as readline from 'readline';

const prisma = new PrismaClient();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}

async function main() {
    console.log('\n🚀 ITVEXO Admin User Creation\n');
    console.log('═'.repeat(50));

    const username = await question('\n👤 Enter username (default: admin): ') || 'admin';
    const email = await question('📧 Enter email (default: aftab@itvexo.com): ') || 'aftab@itvexo.com';
    const password = await question('🔐 Enter password (min 8 characters): ');

    if (password.length < 8) {
        console.error('\n❌ Password must be at least 8 characters long!');
        process.exit(1);
    }

    console.log('\n⏳ Creating admin user...');

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
        where: { username }
    });

    if (existingAdmin) {
        console.error(`\n❌ Admin user "${username}" already exists!`);
        const overwrite = await question(`\n⚠️  Do you want to update the password? (yes/no): `);

        if (overwrite.toLowerCase() !== 'yes') {
            console.log('\n❌ Operation cancelled.');
            process.exit(0);
        }

        // Update existing admin
        const hashedPassword = await bcrypt.hash(password, 12);
        const updated = await prisma.admin.update({
            where: { username },
            data: {
                email,
                password: hashedPassword,
            },
        });

        console.log('\n✅ Admin user updated successfully!');
        console.log('\n📊 Details:');
        console.log('   Username:', updated.username);
        console.log('   Email:', updated.email);
        console.log('   ID:', updated.id);
        console.log('\n🔗 Login at: http://localhost:3000/admin/login');
        console.log('═'.repeat(50));
    } else {
        // Create new admin
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = await prisma.admin.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log('\n✅ Admin user created successfully!');
        console.log('\n📊 Details:');
        console.log('   Username:', admin.username);
        console.log('   Email:', admin.email);
        console.log('   ID:', admin.id);
        console.log('\n🔗 Login at: http://localhost:3000/admin/login');
        console.log('═'.repeat(50));
    }

    rl.close();
}

main()
    .catch((error) => {
        console.error('\n❌ Error:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
