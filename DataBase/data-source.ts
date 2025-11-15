import {DataSource,DataSourceOptions} from 'typeorm'
import {config} from 'dotenv'
import { Visitorstaff } from '../src/visitorstaff/entities/visitorstaff.entity'
import { AdmissionEnquiryEntity } from '../src/admission-enquiry/entities/admission-enquiry.entity'
import { VisitorStudent } from '../src/visitor-student/entities/visitor-student.entity'
import { StaffList } from '../src/staff-list/entities/staff-list.entity'
import { CallLog } from '../src/call-logs/entities/call-log.entity'
import { PostalDispatch } from '../src/postal-dispatch/entities/postal-dispatch.entity'
import { Complaint } from '../src/complaint/entities/complaint.entity'
import { PostalReceive } from '../src/postal-receive/entities/postal-receive.entity'

config(); // Load environment variables

const isProduction = process.env.NODE_ENV === 'production';

// Use DATABASE_URL for production (Render), individual vars for development
let dbConfig: any;

if (process.env.DATABASE_URL) {
    // Use DATABASE_URL (Render or any external database)
    const dbUrl = new URL(process.env.DATABASE_URL);
    dbConfig = {
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    };
    console.log('🔗 Database Connection (URL):');
    console.log(`   Host: ${dbUrl.hostname}`);
    console.log(`   Port: ${dbUrl.port}`);
    console.log(`   Database: ${dbUrl.pathname.slice(1)}`);
    console.log(`   Username: ${dbUrl.username}`);
} else {
    // Fallback: Use individual environment variables
    dbConfig = {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: false
    };
    console.log('🔗 Database Connection (Individual vars):');
    console.log(`   Host: ${process.env.DB_HOST}`);
    console.log(`   Port: ${process.env.DB_PORT}`);
    console.log(`   Database: ${process.env.DB_NAME}`);
    console.log(`   Username: ${process.env.DB_USERNAME}`);
}

console.log(`   App Port: ${process.env.PORT}`);
console.log(`   Environment: ${process.env.NODE_ENV}`);

export const dataSourceOptions:DataSourceOptions={
    type:'postgres',
    ...dbConfig,
    entities: [Visitorstaff, AdmissionEnquiryEntity, VisitorStudent, StaffList, CallLog, PostalDispatch, Complaint, PostalReceive],
    migrations:['dist/DB/migrations/*{.ts,.js}'],
    synchronize: !isProduction, // Only sync in development
    logging: !isProduction,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;