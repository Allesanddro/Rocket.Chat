import type { IReport, MsgGroupedIReport } from '@rocket.chat/core-typings';

import type { PaginatedResult } from '../../helpers/PaginatedResult';
import type { ArchiveReportProps } from './ArchiveReportProps';
import type { ReportHistoryProps } from './ReportHistoryProps';

export type ModerationEndpoints = {
	// API endpoint to fetch the reported messages
	'/v1/moderation.getReports': {
		GET: (params: ReportHistoryProps) => PaginatedResult<{
			reports: MsgGroupedIReport[];
			count: number;
			offset: number;
			total: number;
		}>;
	};
	'/v1/moderation.markChecked': {
		POST: (params: ArchiveReportProps) => {
			report: IReport | null;
		};
	};
	'/v1/moderation.reportsByMessage': {
		GET: (params: { msgId: string; sort?: string; selector?: string; count?: number }) => {
			reports: IReport[];
		};
	};
	'/v1/moderation.getReportInfo': {
		GET: (params: { reportId: string }) => {
			report: IReport | null;
		};
	};
	'/v1/moderation.countReportsByMsgId': {
		GET: (params: { msgId: string; count?: number }) => {
			count: number;
			reportCounts: number;
		};
	};
};
